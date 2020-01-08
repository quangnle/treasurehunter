var Cell = function(cellType, cellValue, row, col){
	this.r = row;
	this.c = col;
	this.cellType = "normal"; // "normal","gate", "start", "treasure"
	this.value = -1;
	this.player = -1;
}