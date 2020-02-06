export default class RuneJump2{
	constructor(){
		this.name = "j2";
		this.runeType = "jump";  // move, jump, luck, unluck, gateway
		this.description = "increase rolled value by 2 for jumping";
		this.owner = null;
		this.imgPath = "imgs/r_jump2.png";
	}
	
	apply(processor){
		if (processor.gameState == "afterRoll"){ 
			this.processor.model.jumpBuff = 2;
		}
	}
}