var Processor = function(model){
	
	this.model = model;
		
	this.moveNorth = function(){
		let curPlayer = this.model.curPlayer;
		if (curPlayer.r - 1 >= 0 && curPlayer.r < this.model.board.nRows && curPlayer.c >= 0 && curPlayer.c < this.model.board.nCols){
			let cell = this.model.board.cells[curPlayer.r - 1][curPlayer.c];
			if (curPlayer.rolledValue >= cell.value){
				this.enterCell(curPlayer, cell, this.model.board.players);
			}
		}
	}
	
	this.moveSouth = function(){
		let curPlayer = this.model.curPlayer;
		if (curPlayer.r + 1 >= 0 && curPlayer.r < this.model.board.nRows && curPlayer.c >= 0 && curPlayer.c < this.model.board.nCols){
			let cell = this.model.board.cells[curPlayer.r + 1][curPlayer.c];
			if (curPlayer.rolledValue >= cell.value){
				this.enterCell(curPlayer, cell, this.model.board.players);
			}
		}
	}
	
	this.moveEast = function(){
		let curPlayer = this.model.curPlayer;
		if (curPlayer.r >= 0 && curPlayer.r < this.model.board.nRows && curPlayer.c + 1 >= 0 && curPlayer.c < this.model.board.nCols){
			let cell = this.model.board.cells[curPlayer.r][curPlayer.c + 1];
			if (curPlayer.rolledValue >= cell.value){
				this.enterCell(curPlayer, cell, this.model.board.players);
			}
		}
	}
	
	this.moveWest = function(){
		let curPlayer = this.model.curPlayer;
		if (curPlayer.r - 1 >= 0 && curPlayer.r < this.model.board.nRows && curPlayer.c - 1 >= 0 && curPlayer.c < this.model.board.nCols){
			let cell = this.model.board.cells[curPlayer.r][curPlayer.c - 1];
			if (curPlayer.rolledValue >= cell.value){
				this.enterCell(curPlayer, cell, this.model.board.players);
			}
		}
	}
	
	this.enterCell = function(cell){		
		let player = model.curPlayer;
		let overlappedPlayer = [];
		
		// find all players are standing in the targeted cell
		for (let i=0; i < this.model.board.players.length; i++){
			if (players[i].name != player.name && player.r == players[i].r && player.c == players[i].r){
				overlappedPlayer.push(players[i]);
			}
		}
		
		if (curPlayer.state == "human") {
			// grab their money, send them all to hell!!! 
			for (let i=0; i < overlappedPlayer.length; i++){
				if (overlappedPlayer[i].state == "evil"){
					this.killEvil(player, overlappedPlayer[i]);
				}
			}
		} else {
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
				// this cell Type is turned into normal
			} else if (cellType == "start") {
				// check if this is own start, yes => end game victory
				// else, mark as one more gate checked-in if enough gate checked => victory
			} else if (cellType == "gateway") {
				// enable jumping / messagebox show before rolling dice
			} else {
				//just move in to this cell
				player.r = cell.r;
				player.c = cell.c;
			}
		} else {
			if (cellType == "gate") {
				// enable jumping / messagebox show before rolling dice
			} else {
				//just move in to this cell
				player.r = cell.r;
				player.c = cell.c;
			}
		}
	}
	
	this.teleport = function(teleValue) {
	}
	
	this.rollDice = function(){
		let dice1 = Math.floor(Math.random()*6) + 1;
		let dice2 = Math.floor(Math.random()*6) + 1;
		return {"dice1": dice1, "dice2": dice2};
	}
	
	this.getRune = function(){
	}
	
	this.endTurn = function(){
	}	
}