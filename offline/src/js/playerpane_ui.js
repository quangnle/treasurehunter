import PaneUI from "./pane_ui";
import ButtonUI from "./button_ui";

export default class PlayerPaneUI{
	constructor(x,y,w,h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.btnMove = new ButtonUI(5,75,w-10,20,"End Turn", "#aaa");
	}
	
	draw(){
		window.p.push();
		window.p.translate(this.x, this.y);
		
		// draw panel
		let pane = new PaneUI(0,0,this.w,this.h,"Player " + this.model.curPlayer.name);
		pane.draw();
		
		// draw money
		window.p.textSize(15);
		window.p.textAlign(window.p.LEFT, window.p.CENTER);
		window.p.text("Money= $" + this.model.curPlayer.money, 0.05*this.w, 35);

		// draw action point
		window.p.textSize(10);
		window.p.textAlign(window.p.LEFT, window.p.CENTER);
		if (this.model.moveBuff > 0) {
			window.p.text("Action Points= " + this.model.curPlayer.actionPoints + " (+" + this.model.moveBuff + " buff)", 0.05*this.w, 50);
		} else if (this.model.jumpBuff > 0) {
			window.p.text("Action Points= " + this.model.curPlayer.actionPoints + " (+" + this.model.jumpBuff + " buff)", 0.05*this.w, 60);
		} else {
			window.p.text("Action Points= " + this.model.curPlayer.actionPoints, 0.05*this.w, 60);
		}
		//draw endturn btn
		this.btnMove.draw();
		
		window.p.pop();
	}
	
	bind(model){
		this.model = model;
	}
	
	onClicked(mx, my){
		let pos = {"x":(mx-this.x), "y":(my-this.y)};
		if (window.p.isInBound(pos, this.btnMove)) {
			if (this.onEndTurn != null){
				this.onEndTurn();
			}
		}
	}
}