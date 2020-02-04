var RuneMove2 = function(){
	this.name = "m2";
	this.runeType = "move"; // move, jump, luck, unluck, gateway
	this.description = "increase rolled value by 2";
	this.owner = null;
	this.imgPath = "imgs/r_move2.png";
	
	this.apply = function(processor){
		if (processor.gameState == "beforeRoll"){ 
			this.processor.model.moveBuff = 2;
		}
	}
}