export default class RuneJump2{
	constructor(){
		this.name = "j2";
		this.runeType = "jump";  // move, jump, luck, unluck, gateway
		this.description = "increase rolled value by 2 for jumping";
		this.owner = null;
		this.imgPath = "imgs/r_jump2.png";
		this.img = window.p.loadImage(this.imgPath);
	}
	
	apply(processor){
		if (processor.gameState == "afterRoll"){ 
			processor.model.jumpBuff = 2;
			processor.teleport();
		}
	}
}