export default class RuneJump1{
	constructor(){
		this.name = "j1";
		this.runeType = "jump"; // move, jump, luck, unluck, gateway
		this.description = "increase rolled value by 1 for jumping";
		this.owner = null;
		this.imgPath = "imgs/r_jump1.png";
		this.img = window.p.loadImage(this.imgPath);
	}
	
	apply(){
		if (window.p.processor.model.gameState == "afterRoll"){ 
			window.p.processor.model.jumpBuff = 1;
			window.p.processor.teleport();
			return true;
		}
		return false;
	}
}