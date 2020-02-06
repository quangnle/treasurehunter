export default class RuneLuck{
	constructor(){
		this.name = "l";
		this.runeType = "luck"; // move, jump, luck, unluck, gateway
		this.description = "collect $5,000 from each player";
		this.owner = null;
		this.imgPath = "imgs/r_luck.png";
	}
	
	apply(processor){
		let opponents = processor.getAllOpponents();
		for (let i=0; i<opponents.length;i++){
			opponents.money -= 5000;
			processor.model.curPlayer.money += 5000;
		}
	}
}