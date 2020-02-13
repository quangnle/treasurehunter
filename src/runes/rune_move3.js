export default class RuneMove3{
	constructor(){
		this.name = "m3";
		this.runeType = "move"; // move, jump, luck, unluck, gateway
		this.description = "increase rolled value by 3";
		this.owner = null;
		this.imgPath = "imgs/r_move3.png";
		this.img = window.p.loadImage(this.imgPath);
	}
	
	apply(processor){
		if (processor.gameState == "beforeRoll"){ //
			processor.model.moveBuff = 3;
		}
	}
}