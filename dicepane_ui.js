var DicePaneUI = function(x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	this.pane = new PaneUI(0,0,w,h,"Dices");
	this.btnMove = new ButtonUI(5,90,w-10,20,"Roll to Move", "#aaa");
	this.btnJump = new ButtonUI(5,115,w-10,20,"Roll to Jump", "#aaa");
	
	this.draw = function(){
		push();
		translate(this.x, this.y);
		
		// draw panel
		this.pane.draw();
		
		// draw number
		fill(0);
		textSize(40);
		textAlign(CENTER, CENTER);
		text(this.model.dice, 0.5*w, 60);
		
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
		
		pop();
	}
	
	this.bind = function(model){
		this.model = model;
	}
	
	this.onClicked = function(mx, my){
		let pos = {"x":(mx-this.x), "y":(my-this.y)};
		console.log("dp =>" + (mx-this.x) + " " + (my-this.y));
		
		if (this.model.canRollToMove){
			if (isInBound(pos, this.btnMove)) {
				console.log("move");
				if (this.onRollMove != null){
					this.onRollMove();
				}
			}
		}
		
		if (this.model.canRollToJump) {
			if (isInBound(pos, this.btnJump)) {
				console.log("jump");
				if (this.onRollJump != null){
					this.onRollJump();
				}
			}
		}
	}
}