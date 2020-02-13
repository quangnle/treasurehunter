export default class RuneMove2{
	constructor(){
		this.name = "m2";
		this.runeType = "move"; // move, jump, luck, unluck, gateway
		this.description = "increase rolled value by 2";
		this.owner = null;
		this.imgPath = "imgs/r_move2.png";
		this.img = window.p.loadImage(this.imgPath);
	}
	
	apply(){
		if (window.p.processor.gameState == "beforeRoll"){ 
			window.p.processor.model.moveBuff = 2;
		}
	}
}