export default class RuneMove1{
	constructor(){
		this.name = "m1";
		this.runeType = "move"; // move, jump, luck, unluck, gateway
		this.description = "increase rolled value by 1";
		this.owner = null;
		this.imgPath = "imgs/r_move1.png";
	}
	
	apply(processor){
		if (processor.gameState == "beforeRoll"){ 
			this.processor.model.moveBuff = 1;
		}
	}
}