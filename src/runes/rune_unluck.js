export default class RuneUnluck{
	constructor(){
		this.name = "ul";
		this.runeType = "unluck";// move, jump, luck, unluck, gateway
		this.description = "pay each other player $5,000";
		this.owner = null;
		this.imgPath = "imgs/r_unluck.png";
		this.img = window.p.loadImage(this.imgPath);
	}
	
	apply(processor){
		let opponents = processor.getAllOpponents();
		for (let i=0; i<opponents.length;i++){
			opponents.money += 5000;
			processor.model.curPlayer.money -= 5000;
		}
	}
}