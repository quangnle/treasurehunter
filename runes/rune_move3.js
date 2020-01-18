var RuneMove3 = function(name, runeType, description){
	this.name = name;
	this.runeType = runeType; // move, jump, luck, unluck, gateway
	this.description = "increase rolled value by 3";
	this.owner = null;
	
	this.apply = function(processor){
		if (processor.gameState == "beforeRoll"){ //
			this.processor.model.diceBuff = 3;
		}
	}
}