import PaneUI from "./pane_ui";
import ButtonUI from "./button_ui";
export default class DicePaneUI{
	constructor(x,y,w,h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		
		this.pane = new PaneUI(0,0,w,h,"Dices");
		this.btnMove = new ButtonUI(5,90,w-10,20,"Roll to Move", "#aaa");
		this.btnJump = new ButtonUI(5,115,w-10,20,"Roll to Jump", "#aaa");
	}
	
	draw(){
		window.p.push();
		window.p.translate(this.x, this.y);
		
		// draw panel
		this.pane.draw();
		
		// draw number
		window.p.fill(0);
		window.p.textSize(40);
		window.p.textAlign(window.p.CENTER, window.p.CENTER);

		window.p.text(this.model.dice, 0.5*this.w, 60);
		
		//draw buttons 
		if (!this.model.canRollToMove){
			this.btnMove.fillColor = "#faa";
		} else {
			this.btnMove.fillColor = "#aaa";
		}
		this.btnMove.draw();
		
		if (!this.model.canRollToJump){
			this.btnJump.fillColor = "#faa";
		} else {
			this.btnJump.fillColor = "#aaa";
		}
		this.btnJump.draw();
		
		window.p.pop();
	}
	
	bind(model){
		this.model = model;
	}
	
	onClicked(mx, my){
		let pos = {"x":(mx-this.x), "y":(my-this.y)};
		console.log("dp =>" + (mx-this.x) + " " + (my-this.y));
		
		if (this.model.canRollToMove){
			if (window.p.isInBound(pos, this.btnMove)) {
				console.log("move");
				if (this.onRollMove != null){
					this.onRollMove();
				}
			}
		}
		
		if (this.model.canRollToJump) {
			if (window.p.isInBound(pos, this.btnJump)) {
				console.log("jump");
				if (this.onRollJump != null){
					this.onRollJump();
				}
			}
		}
	}
}