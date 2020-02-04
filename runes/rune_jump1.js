var RuneJump1 = function(){
	this.name = "j1";
	this.runeType = "jump"; // move, jump, luck, unluck, gateway
	this.description = "increase rolled value by 1 for jumping";
	this.owner = null;
	this.imgPath = "imgs/r_jump1.png";
	
	this.apply = function(processor){
		if (processor.gameState == "afterRoll"){ 
			this.processor.model.jumpBuff = 1;
		}
	}
}