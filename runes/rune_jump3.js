var RuneJump3 = function(name, runeType, description){
	this.name = name;
	this.runeType = runeType; // move, jump, luck, unluck, gateway
	this.description = "increase rolled value by 3 for jumping";
	this.owner = null;
	
	this.apply = function(processor){
		if (processor.gameState == "afterRoll"){ 
			this.processor.model.jumpBuff = 3;
		}
	}
}