var RuneLuck = function(name, runeType, description){
	this.name = name;
	this.runeType = runeType; // move, jump, luck, unluck, gateway
	this.description = "collect $5,000 from each player";
	this.owner = null;
	this.imgPath = "imgs/r_luck.png";
	
	this.apply = function(processor){
		let opponents = processor.getAllOpponents();
		for (let i=0; i<opponents.length;i++){
			opponents.money -= 5000;
			processor.model.curPlayer.money += 5000;
		}
	}
}