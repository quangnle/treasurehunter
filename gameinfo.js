var GameInfo = function(){
	this.players = null;
	
	this.curPlayer = null;
	this.board = null;	
	this.drawMode = "game";
	this.dice = 1;
	
	this.canRollToMove = false;
	this.canRollToJump = false;
}