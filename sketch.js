var processor = null;
var mainui = new MainUI();

function isInBound(pos, region){
	console.log("is in bound => " + pos);
	if ((pos.x > region.x && pos.x < region.x + region.w) && 
		(pos.y > region.y && pos.y < region.y + region.h)) 
		return true;
		
	return false;
}

function setup(){
	createCanvas(1200, 800);
	let model = new GameInfo();
	model.board = new Board(21,21);	
	model.board.initMap();
	model.players = model.board.players;
	model.curPlayerIdx = 0;
	model.curPlayer = model.players[model.curPlayerIdx];
	
	processor = new Processor(model);
	
	let boardui = new BoardUI(0,0,630,630);	
	boardui.initTileImages();	
	boardui.initPlayerImages();	
	mainui.addControl("game", boardui);
	
	let dicepaneui = new DicePaneUI(640,0,150,140);
	// roll dice events handling
	dicepaneui.onRollMove = () => {processor.rollMove();};
	dicepaneui.onRollJump = () => {processor.rollJump();};	
	mainui.addControl("game", dicepaneui);
	
	let playerpaneui = new PlayerPaneUI(640,150,150,95);
	// endturn event handling
	playerpaneui.onEndTurn = processor.endTurn();	
	mainui.addControl("game", playerpaneui);
	
	mainui.bind(model);	
}

function draw(){
	mainui.draw();
}

function mousePressed(){
	mainui.onClicked(mouseX, mouseY);
}

function keyPressed(){
	if (keyCode === LEFT_ARROW) {
		processor.moveWest();
	} else if (keyCode === RIGHT_ARROW) {
		processor.moveEast();
	} else if (keyCode === UP_ARROW) {
		processor.moveNorth();
	} else if (keyCode === DOWN_ARROW) {
		processor.moveSouth();
	}
}