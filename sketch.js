var processor = null;
var mainui = new MainUI();


	
function isInBound(pos, region){
	if ((pos.x > region.x && pos.x < region.x + region.w) && 
		(pos.x > region.y && pos.x < region.y + region.h)) 
		return true;
		
	return false;
}

function setup(){
	createCanvas(1200, 800);
	let model = new GameInfo();
	model.board = new Board(21,21);	
	model.board.initMap();
	model.players = model.board.players;
	model.curPlayer = model.players[0];
	
	let boardui = new BoardUI(0,0,630,630);	
	boardui.initTileImages();	
	boardui.initPlayerImages();	
	mainui.addControl("game", boardui);
	
	let dicepaneui = new DicePaneUI(640,0,150,140);
	mainui.addControl("game", dicepaneui);
	
	let playerpaneui = new PlayerPaneUI(640,150,150,95);
	mainui.addControl("game", playerpaneui);
	
	mainui.bind(model);
	
	processor = new Processor(model);
	
	// roll dice events handling
	dicepaneui.onRollMove = processor.rollMove();
	dicepaneui.onRollJump = processor.rollJump();
	
	// endturn event handling
	playerpaneui.onEndTurn = processor.endTurn();
}

function draw(){
	mainui.draw();
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