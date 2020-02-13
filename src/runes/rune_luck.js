export default class RuneLuck{
	constructor(){
		this.name = "l";
		this.runeType = "luck"; // move, jump, luck, unluck, gateway
		this.description = "collect $5,000 from each player";
		this.owner = null;
		this.imgPath = "imgs/r_luck.png";
		this.img = window.p.loadImage(this.imgPath);
	}
	
	apply(){
		let opponents = window.p.processor.getAllOpponents();
		for (let i=0; i<opponents.length;i++){
			opponents.money -= 5000;
			window.p.processor.model.curPlayer.money += 5000;
		}
	}
}