var RuneUnluck = function(name, runeType, description){
	this.name = name;
	this.runeType = runeType; // move, jump, luck, unluck, gateway
	this.description = "pay each other player $5,000";
	this.owner = null;
	
	this.apply = function(processor){
		let opponents = processor.getAllOpponents(processor.model.curPlayer);
		for (let i=0; i<opponents.length;i++){
			opponents.money += 5000;
			processor.model.curPlayer.money -= 5000;
		}
	}
}