var Processor = function(){
	this.init = function(){
		let player1 = new Player("Quang");
		let player2 = new Player("Quoc");
		let player3 = new Player("Phuc");
		let player4 = new Player("Nam");
		let players = [player1, player2, player3, player4];

		let gInfo = new GameInfo(21,21,players);
	}
	
	this.model = function(){
		return this.gameInfo;
	}
	
	this.moveNorth = function(){
	}
	
	this.moveSouth = function(){
	}
	
	this.moveEast = function(){
	}
	
	this.moveWest = function(){
	}
	
	this.teleport = function(teleValue) {
	}
	
	this.rollDice = function(){
		let dice1 = Math.floor(Math.random()*6) + 1;
		let dice2 = Math.floor(Math.random()*6) + 1;
		return {"dice1": dice1, "dice2": dice2};
	}
}