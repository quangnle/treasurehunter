var processor = new Processor();
var mainui = new MainUI();

function setup(){
	createCanvas(1200, 800);
	let model = new GameInfo();
	model.board = new Board(21,21);	
	model.board.initMap();
	
	let boardui = new BoardUI(0,0,630,630);	
	boardui.initTileImages();	
	mainui.addControl("game", boardui);
	mainui.bind(model);
	
}

function draw(){
	mainui.draw();
}

function keyPressed(){
	
}