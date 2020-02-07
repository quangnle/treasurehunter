export default class RuneJump3{
	constructor(){
		this.name = "j3";
		this.runeType = "jump"; // move, jump, luck, unluck, gateway
		this.description = "increase rolled value by 3 for jumping";
		this.owner = null;
		this.imgPath = "imgs/r_jump3.png";
		this.img = window.p.loadImage(this.imgPath);
	}

	apply(processor){
		if (processor.gameState == "afterRoll"){ 
			this.processor.model.jumpBuff = 3;
		}
	}
}