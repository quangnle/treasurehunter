var RuneJump2 = function(name, runeType, description){
	this.name = name;
	this.runeType = runeType; // move, jump, luck, unluck, gateway
	this.description = "increase rolled value by 2 for jumping";
	this.owner = null;
	this.imgPath = "imgs/r_jump2.png";
	
	this.apply = function(processor){
		if (processor.gameState == "afterRoll"){ 
			this.processor.model.jumpBuff = 2;
		}
	}
}