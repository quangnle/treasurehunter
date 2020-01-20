var RuneMove2 = function(name, runeType, description){
	this.name = name;
	this.runeType = runeType; // move, jump, luck, unluck, gateway
	this.description = "increase rolled value by 2";
	this.owner = null;
	
	this.apply = function(processor){
		if (processor.gameState == "beforeRoll"){ 
			this.processor.model.moveBuff = 2;
		}
	}
}