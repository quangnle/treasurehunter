export default class RuneJump1{
	constructor(){
		this.name = "j1";
		this.runeType = "jump"; // move, jump, luck, unluck, gateway
		this.description = "increase rolled value by 1 for jumping";
		this.owner = null;
		this.imgPath = "imgs/r_jump1.png";
		this.img = window.p.loadImage(this.imgPath);
	}
	
	apply(processor){
		if (processor.gameState == "afterRoll"){ 
			processor.model.jumpBuff = 1;
			processor.teleport();
		}
	}
}