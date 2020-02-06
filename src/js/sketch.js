import p5 from "p5";
import MainUI from "./main_ui";
import BoardUI from "./board_ui";
import GameInfo from "./gameinfo";
import Board from "./board";
import Processor from "./processor";
import DicePaneUI from "./dicepane_ui";
import PlayerPaneUI from "./playerpane_ui";
import InventoryPaneUI from "./inventorypane_ui";
import GetRunePaneUI from "./getrunepane_ui";

var processor = null;
var mainui = new MainUI();
console.log(mainui);




const sketch = p => {
	p.setup = () => {
		p.createCanvas(1200, 800);
		let model = new GameInfo();
		model.board = new Board(21,21);	
		model.board.initMap();
		model.players = model.board.players;
		model.curPlayerIdx = 0;
		model.curPlayer = model.players[model.curPlayerIdx];
		
		processor = new Processor(model);
		processor.loadRunes();
		
		let boardui = new BoardUI(0,0,630,630);	
		boardui.initTileImages();	
		boardui.initPlayerImages();	
		mainui.addControl("game", boardui);
		
		let dicepaneui = new DicePaneUI(640,0,150,140);
		// roll dice events handling
		dicepaneui.onRollMove = processor.rollMove;
		dicepaneui.onRollJump = processor.rollJump;	
		mainui.addControl("game", dicepaneui);
		
		let playerpaneui = new PlayerPaneUI(640,150,150,95);
		// endturn event handling
		playerpaneui.onEndTurn = processor.endTurn;	
		mainui.addControl("game", playerpaneui);
		
		let inventorypaneui = new InventoryPaneUI(640,260,150,200);
		inventorypaneui.onUseRune = processor.onUseRune;
		mainui.addControl("game", inventorypaneui);
		
		// get rune mode
		let getrunepaneui = new GetRunePaneUI(150,150,300,120);
		getrunepaneui.onAcceptRune = processor.onAcceptRune;
		getrunepaneui.onIgnoreRune = processor.onIgnoreRune;
		getrunepaneui.onClose = processor.onGetRuneClosed;
		mainui.addControl("getrune", getrunepaneui);
		
		// select rune mode "selectjumprune"
		mainui.bind(model);	
	}

	p.isInBound = (pos, region) => {
		console.log("is in bound => " + pos);
		if ((pos.x > region.x && pos.x < region.x + region.w) && 
			(pos.y > region.y && pos.y < region.y + region.h)) 
			return true;
			
		return false;
	}

	p.draw = () => {
		mainui.draw();
	}

	p.mousePressed = () => {
		mainui.onClicked(p.mouseX, p.mouseY);
	}

	p.keyPressed = () => {
		if (p.keyCode === p.LEFT_ARROW) {
			processor.moveLeft();
		} else if (p.keyCode === p.RIGHT_ARROW) {
			processor.moveRight();
		} else if (p.keyCode === p.UP_ARROW) {
			processor.moveUp();
		} else if (p.keyCode === p.DOWN_ARROW) {
			processor.moveDown();
		}
	}
}

var p = new p5(sketch);
console.log(p,p5);
window.p = p;