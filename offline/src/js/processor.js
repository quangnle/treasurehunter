import RuneLuck from "../runes/rune_luck";
import RuneJump1 from "../runes/rune_jump1";
import RuneJump2 from "../runes/rune_jump2";
import RuneJump3 from "../runes/rune_jump3";
import RuneMove1 from "../runes/rune_move1";
import RuneMove2 from "../runes/rune_move2";
import RuneMove3 from "../runes/rune_move3";
import RuneGateway from "../runes/rune_gateway";

export default class Processor{
	constructor(model){
		this.model = model;
		this.model.gameState = "beforeRoll"; // "beforeRoll", "afterRoll", "beforeEndTurn"
	}
	
	loadRunes(){
		this.model.runes = [];
		this.model.runes.push(new RuneLuck()); // 1 rune luck
		
		this.model.runes.push(new RuneJump1());
		this.model.runes.push(new RuneJump1());
		this.model.runes.push(new RuneJump2());
		this.model.runes.push(new RuneJump2());
		this.model.runes.push(new RuneJump3());
		this.model.runes.push(new RuneJump3()); // 6 jump runes
		
		this.model.runes.push(new RuneMove1());
		this.model.runes.push(new RuneMove1());
		this.model.runes.push(new RuneMove1());
		this.model.runes.push(new RuneMove1());
		this.model.runes.push(new RuneMove2());
		this.model.runes.push(new RuneMove2());
		this.model.runes.push(new RuneMove2());
		this.model.runes.push(new RuneMove3());
		this.model.runes.push(new RuneMove3());		// 9 move runes
		
		this.model.runes.push(new RuneGateway());
		this.model.runes.push(new RuneGateway());		// 2 gateway rune
	}
		
	moveUp(){
		let curPlayer = this.model.curPlayer;
		if (curPlayer.r - 1 >= 0 && curPlayer.r < this.model.board.nRows && curPlayer.c >= 0 && curPlayer.c < this.model.board.nCols){
			let cell = this.model.board.cells[curPlayer.r - 1][curPlayer.c];
			if (curPlayer.actionPoints >= cell.value){
				curPlayer.actionPoints -= cell.value;
				this.enterCell(cell);
			}
		}
	}
	
	moveDown(){
		let curPlayer = this.model.curPlayer;
		if (curPlayer.r + 1 >= 0 && curPlayer.r+1 < this.model.board.nRows && curPlayer.c >= 0 && curPlayer.c < this.model.board.nCols){
			let cell = this.model.board.cells[curPlayer.r + 1][curPlayer.c];
			if (curPlayer.actionPoints >= cell.value){
				curPlayer.actionPoints -= cell.value;
				this.enterCell(cell);
			}
		}
	}
	
	moveLeft(){
		let curPlayer = this.model.curPlayer;
		if (curPlayer.r >= 0 && curPlayer.r < this.model.board.nRows && curPlayer.c - 1 >= 0 && curPlayer.c - 1 < this.model.board.nCols){
			let cell = this.model.board.cells[curPlayer.r][curPlayer.c - 1];
			if (curPlayer.actionPoints >= cell.value){
				curPlayer.actionPoints -= cell.value;
				this.enterCell(cell);
			}
		}
	}
	
	moveRight(){
		let curPlayer = this.model.curPlayer;
		if (curPlayer.r >= 0 && curPlayer.r < this.model.board.nRows && curPlayer.c + 1 >= 0 && curPlayer.c + 1 < this.model.board.nCols){
			let cell = this.model.board.cells[curPlayer.r][curPlayer.c + 1];
			if (curPlayer.actionPoints >= cell.value){
				curPlayer.actionPoints -= cell.value;
				this.enterCell(cell);
			}
		}
	}

	cheatRune(){
		if (this.model.curPlayer.runes.length < 5){
			let rnd = Math.floor(Math.random() * this.model.runes.length);
			this.model.curPlayer.runes.push(this.model.runes[rnd]);
		}
	}

	cheatJump(){
		this.model.curPlayer.r = this.model.board.gateways[0].r;
		this.model.curPlayer.c = this.model.board.gateways[0].c;
		this.model.canRollToJump = true;
	}
	
	enterCell(cell){		
		let player = this.model.curPlayer;
		let overlappedPlayer = [];
		
		// find all players are standing in the targeted cell
		for (let i=0; i < this.model.board.players.length; i++){
			let pi = this.model.board.players[i];
			if (pi.name != player.name && cell.r == pi.r && cell.c == pi.c){
				overlappedPlayer.push(this.model.board.players[i]);
			}
		}
		
		if (player.state == "human") {
			// if human killed evils => grab their money, send them all to hell!!! 
			for (let i=0; i < overlappedPlayer.length; i++){
				if (overlappedPlayer[i].state == "evil"){
					this.killEvil(player, overlappedPlayer[i]);
				}
			}
		} else { // if evil kill human => grab half the treasure, end game
			for (let i=0; i < overlappedPlayer.length; i++){
				if (overlappedPlayer[i].state == "human"){
					this.killHuman(player, overlappedPlayer[i]); // treasure raider has been destroyed
				}
			}
		}
	
		// move phase
		if (player.state == "human") {
			if (cell.cellType == "treasure"){
				// turn other 3 into evil mode
				for (let i=0; i < this.model.board.players.length; i++){
					let pi = this.model.board.players[i];
					if (pi.name != player.name){
						pi.state = "evil";
					}
				}
				// this cell Type is turned into normal
				cell.cellType = "normal";
				// enable to roll dice one more time
				this.model.canRollToMove = true;
				
			} else if (cell.cellType == "start") {
				// check if this is own start, yes => end game victory
				if (cell.r == player.startPoint.r && cell.c == player.startPoint.c){
					this.model.drawMode = "end";
				}
				// else, mark as one more gate checked-in if enough gate checked => victory
				else {					
					for (let i=0; i < this.model.board.players.length; i++){
						let pi = this.model.board.players[i];
						if (pi.startPoint.r == cell.r && pi.startPoint.c == cell.c){
							//check if the soul is added 
							let isAdded = false;
							for(let j=0; j<this.model.board.destroyedSouls.length; j++)
							{
								if (this.model.board.destroyedSouls[i] == pi.name) {
									isAdded = true;
									break;
								}
							}
							if (!isAdded) { // if not, then add it to the destroyed souls
								this.model.board.destroyedSouls.push(pi.name);
							}
						}
					}
					
					// if enough souls have been destroyed, then victory
					if (this.model.board.destroyedSouls.length == this.model.board.players.length - 1){
						this.model.drawMode = "end";
					}
				}
			} else if (cell.cellType == "gate") {
				// enable jumping
				this.model.canRollToJump = true;
			}
		} else {
			if (cell.cellType == "gate") {
				// enable jumping
				this.model.canRollToJump = true;
			}
		}
		
		// move in to this cell
		player.r = cell.r;
		player.c = cell.c;
	}
	
	teleport() {
		// get current gate index
		let idx = -1;
		for(let i=0; i<this.model.board.gateways.length; i++){
			if (this.model.board.gateways[i].r == this.model.curPlayer.r && this.model.board.gateways[i].c == this.model.curPlayer.c){
				idx = i;
				break;
			}
		}
		console.log("teleporting to",this.model.dice + this.model.jumpBuff + idx);
		// set new position 
		if (idx >=0 ) {
			idx = (this.model.dice + this.model.jumpBuff + idx) % this.model.board.gateways.length;
			this.model.curPlayer.r = this.model.board.gateways[idx].r;
			this.model.curPlayer.c = this.model.board.gateways[idx].c;			
		}

		this.model.jumpBuff = 0;
		this.model.curPlayer.actionPoints = 0;
		this.model.canRollToJump = false;
	}

	killEvil(killer, killed){
		let isSoulDestroyed = false;
		for (let i = 0; i< this.model.board.destroyedSouls.length; i++){
			if (killed.name == this.model.board.destroyedSouls[i]){
				isSoulDestroyed = true;
				break;
			}
		}

		if (isSoulDestroyed){ // double charged
			killed.money -= 10000;
			killer.money += 10000;
		} else { // charged and back to the starting point
			killed.money -= 5000;
			killer.money += 5000;				
		}
		killed.r = killed.startPoint.r;
		killed.c = killed.startPoint.c;

		this.model.canRollToMove = false;
		this.model.canRollToJump = false;
	}

	killHuman(killer, killed){
		killer.money += 10000;
		for (let i=0; i<this.model.board.players.length; i++){
			let player = this.model.board.players[i];
			if (player.state == "evil") {
				player.money += 10000;
			}
		}
		this.model.drawMode = "end";
	}
	
	rollMove(){
		this.model.dice = Math.floor(Math.random()*10)+1;
		this.model.gameState = "afterRoll";
		
		if (this.model.dice == 10 || (this.runeTesting&&this.model.dice>=this.runeTesting) ){
			this.model.drawMode = "getrune";
		} else {
			this.model.curPlayer.actionPoints = this.model.dice + this.model.moveBuff;
			this.model.curPlayer.actionPoints = Math.min(9, this.model.curPlayer.actionPoints);
			this.model.moveBuff = 0; // disable dice buff
			this.model.canRollToMove = false;
		}
	}
	
	rollJump(){
		this.model.dice = Math.floor(Math.random()*4) + 1;
		this.model.gameState = "afterRoll";

		// check inventory if there is a rune that can be used for jumping
		let jumpRunes = [];
		console.log(this.model.curPlayer,"trying to jump");
		for(let i =0; i < this.model.curPlayer.runes.length; i++){
			let rune = this.model.curPlayer.runes[i];
			if (rune.runeType == "jump") {
				jumpRunes.push(rune);
			}
		}
		
		if (jumpRunes.length > 0){
			console.log("select jump rune ? anyone ?");
			this.model.drawMode = "selectjumprune";
		} else {
			this.teleport();
		}
		this.model.canRollToMove = false;
	}
		
	onGetRuneClosed(){
		this.model.curPlayer.actionPoints = 0;
		this.model.canRollToMove = false;
		this.model.receivedRune = null;
		this.model.drawMode = "game";
	}
	
	onAcceptRune(){
		if (this.model.runes != null && this.model.runes.length > 0){
			let rndIdx = Math.floor(Math.random() * this.model.runes.length); // randomly pick a rune in the rune collection
			console.log("generating a rune for you :", rndIdx, this.model.runes[rndIdx]);

			if (this.model.runes[rndIdx].runeType == "luck"){
				let canApply = this.model.runes[rndIdx].apply();
				if (canApply){
					//hehee					
				}
			} else {
				this.model.receivedRune = this.model.runes[rndIdx];
				this.model.curPlayer.runes.push(this.model.runes[rndIdx]);
				
			}

			this.model.drawMode = "game";
			this.model.canRollToMove = false;
			this.model.canRollToJump = false;
		}
	}
	
	onIgnoreRune(){
		// this.model.receivedRune = null;
		this.model.drawMode = "game";
	}

	onSelectJumpRune(id){
		console.log("applying jump rune",this.model.curPlayer.runes[id])
		let canApply = this.model.curPlayer.runes[id].apply();

		if (canApply){
			// remove rune
			this.model.curPlayer.runes.splice(id,1);
		}

		console.log("after apply :",this.model.curPlayer);
		//this.teleport();
		this.model.drawMode = "game";
	}

	onCancelJumpRune(){
		this.teleport();
		this.model.jumpBuff = 0;
		this.model.drawMode = "game";
	}
	
	endTurn(){
		this.model.curPlayerIdx = (this.model.curPlayerIdx + 1) % this.model.players.length;
		this.model.curPlayer = this.model.players[this.model.curPlayerIdx];
		this.model.jumpBuff = 0;
		this.model.moveBuff = 0;
		this.model.curPlayer.actionPoints = 0;
		this.model.canRollToMove = true;		
		this.model.receivedRune = null;		
		this.model.gameState = "beforeRoll";
		
		// check if can jump to set status
		this.model.canRollToJump = false;
		for (let i = 0; i < this.model.board.gateways.length; i++){
			let g = this.model.board.gateways[i];
			if (this.model.curPlayer.r == g.r && this.model.curPlayer.c == g.c){
				this.model.canRollToJump = true;
				break;
			}
		}
	}
	
	onUseRune(){
		let canApply = this.model.selectedRune.apply();
		if (canApply){
			// remove rune from player's runes
			let idx = -1;
			for (let i=0; i<this.model.curPlayer.runes.length; i++){
				if (this.model.curPlayer.runes[i].name == this.model.selectedRune.name){
					idx = i;
					break;
				}
			}
			this.model.curPlayer.runes.splice(idx, 1);
		}
	}
	
	//selecting a rune in the inventory
	onRuneSelected(rune){
		this.model.selectedRune = rune;
	}
	
	getAllOpponents(){
		let result = [];
		for (let i=0; i < this.model.board.players.length; i++){
			let pi = this.model.board.players[i];
			if (pi.name != this.model.curPlayer.name){
				result.push(pi);
			}
		}
		return result;
	}	
}