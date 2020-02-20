import PaneUI from "./pane_ui";

export default class EndGamePaneUI{
	constructor(x,y,w,h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		
		this.pane = new PaneUI(0,0,w,h,"End Game");
	}
	
	draw(){
		window.p.push();
		window.p.translate(this.x, this.y);
		
		// draw panel
		this.pane.draw();
		
		// draw number
		window.p.fill(0);
		window.p.textSize(10);
		window.p.textAlign(window.p.CENTER, window.p.CENTER);
        
        window.p.text("Congratulation " + this.model.curPlayer.name + " !!! You defeated them all!", 0.5*this.w, 30);
		window.p.pop();
	}
	
	bind(model){
		this.model = model;
	}
	
	onClicked(mx, my){
		
	}
}