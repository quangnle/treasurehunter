var Processor = function(model){
	
	this.model = model;
	this.gameSate = "beforeRoll"; // "beforeRoll", "afterRoll", "beforeEndTurn"
		
	this.moveUp = function(){
		let curPlayer = this.model.curPlayer;
		if (curPlayer.r - 1 >= 0 && curPlayer.r < this.model.board.nRows && curPlayer.c >= 0 && curPlayer.c < this.model.board.nCols){
			let cell = this.model.board.cells[curPlayer.r - 1][curPlayer.c];
			if (curPlayer.actionPoints >= cell.value){
				curlayer.actiontPoints -= cell.value;
				this.enterCell(cell);
			}
		}
	}
	
	this.moveDown = function(){
		let curPlayer = this.model.curPlayer;
		if (curPlayer.r + 1 >= 0 && curPlayer.r < this.model.board.nRows && curPlayer.c >= 0 && curPlayer.c < this.model.board.nCols){
			let cell = this.model.board.cells[curPlayer.r + 1][curPlayer.c];
			if (curPlayer.actionPoints >= cell.value){
				curlayer.actiontPoints -= cell.value;
				this.enterCell(cell);
			}
		}
	}
	
	this.moveLeft = function(){
		let curPlayer = this.model.curPlayer;
		if (curPlayer.r >= 0 && curPlayer.r < this.model.board.nRows && curPlayer.c + 1 >= 0 && curPlayer.c + 1 < this.model.board.nCols){
			let cell = this.model.board.cells[curPlayer.r][curPlayer.c + 1];
			if (curPlayer.actionPoints >= cell.value){
				curlayer.actiontPoints -= cell.value;
				this.enterCell(cell);
			}
		}
	}
	
	this.moveRight = function(){
		let curPlayer = this.model.curPlayer;
		if (curPlayer.r >= 0 && curPlayer.r < this.model.board.nRows && curPlayer.c - 1 >= 0 && curPlayer.c - 1 < this.model.board.nCols){
			let cell = this.model.board.cells[curPlayer.r][curPlayer.c - 1];
			if (curPlayer.actionPoints >= cell.value){
				curlayer.actiontPoints -= cell.value;
				this.enterCell(cell);
			}
		}
	}
	
	this.enterCell = function(cell){		
		let player = model.curPlayer;
		let overlappedPlayer = [];
		
		// find all players are standing in the targeted cell
		for (let i=0; i < this.model.board.players.length; i++){
			let pi = this.model.board.players[i];
			if (pi.name != player.name && player.r == pi.r && player.c == pi.c){
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
					if (this.model.board.destroyedSouls.length == this.model.board.players.length){
						this.model.drawMode = "end";
					}
				}
			} else if (cell.cellType == "gateway") {
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
	
	this.teleport = function(teleValue) {
	}
	
	this.rollMove = function(){
		this.model.dice = Math.floor(Math.random()*10)+1;
		this.model.dice += this.model.diceBuff;
		this.model.dice = Math.min(9, this.model.dice);
		this.model.diceBuff = 0; // disable dice buff
		
		if (this.model.dice == 10){
			this.model.drawMode = "getRune";
		} else {
			this.model.curPlayer.actionPoints = this.model.dice;
			this.canRollToMove = false;
		}
	}
	
	this.rollJump = function(){
		this.model.dice = Math.floor(Math.random()*4) + 1;
		// check inventory if there is a rune that can apply to this
	}
	
	this.getRune = function(){
	}
	
	this.endTurn = function(){
	}
	
	this.onRuneClicked = function(rune){
		rune.apply(this);
	}
}