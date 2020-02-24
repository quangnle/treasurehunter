export default class Player{
	constructor(name, money, row, col){
		this.name = name;
		this.money = money;
		this.actionPoints = 0;
		this.runes = [];
		this.state = "human"; // "evil", "dead"
		this.r = row;
		this.c = col;
		
		this.startPoint = {"r":row, "c":col};	
	}
}