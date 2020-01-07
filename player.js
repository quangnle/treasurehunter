var Player = function(name, money){
	this.id = -1;
	this.name = name;
	this.money = money;
	this.curRolledValue = null;
	this.runes = [];
	this.state = "normal"; // "evil"
}