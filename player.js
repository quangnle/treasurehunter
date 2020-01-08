var Player = function(name, money, row, col){
	this.name = name;
	this.money = money;
	this.rolledValue = null;
	this.runes = [];
	this.state = "human"; // "evil"
	this.r = row;
	this.c = col;
}