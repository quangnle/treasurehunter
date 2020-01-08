var Processor = function(){
		
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