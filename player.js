var Player = function(name, money, row, col){
	this.name = name;
	this.money = money;
	this.actionPoints = 9;
	this.runes = [];
	this.state = "human"; // "evil"
	this.r = row;
	this.c = col;
	
	this.startPoint = {"r":row, "c":col};	
}