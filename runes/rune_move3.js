var RuneMove3 = function(){
	this.name = "m3";
	this.runeType = "move"; // move, jump, luck, unluck, gateway
	this.description = "increase rolled value by 3";
	this.owner = null;
	this.imgPath = "imgs/r_move3.png";
	
	this.apply = function(processor){
		if (processor.gameState == "beforeRoll"){ //
			this.processor.model.moveBuff = 3;
		}
	}
}