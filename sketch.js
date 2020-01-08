var processor = null;
var mainui = new MainUI();

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
	mainui.bind(model);
	
	processor = new Processor(model);
	
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
	} else {
		
	}
}