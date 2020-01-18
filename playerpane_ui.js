var PlayerPaneUI = function(x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	this.draw = function(){
		push();
		translate(this.x, this.y);
		
		// draw panel
		let pane = new PaneUI(0,0,w,h,"Player Info");
		pane.draw();
		
		// draw info
		// current player's name
		fill(0);
		textSize(20);
		textAlign(CENTER, CENTER);
		text(this.model.curPlayer.name, 0.5*w, 35);
		
		//
		textSize(16);
		textAlign(CENTER, CENTER);
		text("Action Points= " + this.model.curPlayer.actionPoints, 0.5*w, 60);
		
		//draw endturn btn
		this.btnMove = new ButtonUI(5,70,w-10,20,"End Turn", "#faa");
		this.btnMove.draw();
		
		pop();
	}
	
	this.bind = function(model){
		this.model = model;
	}
	
	this.onClicked = function(mx, my){
		let pos = {"x":(mx-this.x), "y":(my-this.y)};
		if (isInBound(pos, this.onEndTurn)) {
			this.onEndTurn();
		}
	}
}