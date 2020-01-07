var Rune = function(name, runeType, description){
	this.name = name;
	this.runeType = runeType; // move, tele, luck, unluck, gateway
	this.description = description;
	this.owner = null;
	
	this.apply = function(){
	}
}