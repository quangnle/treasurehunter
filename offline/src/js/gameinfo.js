export default class GameInfo{
	constructor(){
		this.players = null;
		this.curPlayerIdx = -1;
		this.curPlayer = null;
		this.board = null;	
		this.drawMode = "game";
		this.dice = 1;
		this.moveBuff = 0;
		this.jumpBuff = 0;
		
		this.runes = null;
		
		this.canRollToMove = true;
		this.canRollToJump = false;
		this.canUseRune = false;
	}
}