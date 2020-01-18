var DicePaneUI = function(x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	this.draw = function(){
		push();
		translate(this.x, this.y);
		
		// draw panel
		let pane = new PaneUI(0,0,w,h,"Dices");
		pane.draw();
		
		// draw numbers
		// dice1
		fill(0);
		textSize(40);
		textAlign(CENTER, CENTER);
		text(this.model.dice, 0.5*w, 60);
		
		
		// dice2
		
		
		//draw buttons
		this.btnMove = new ButtonUI(5,90,w-10,20,"Roll to Move", "#faa");
		if (this.model.canRollToMove){
			this.btnMove.fillColor = "#aaa";
		}
		this.btnMove.draw();
		
		this.btnJump = new ButtonUI(5,115,w-10,20,"Roll to Jump", "#faa");
		if (this.model.canRollToJump){
			this.btnJump.fillColor = "#aaa";
		}
		this.btnJump.draw();
		
		pop();
	}
	
	this.bind = function(model){
		this.model = model;
	}
	
	this.onClicked = function(mx, my){
		let pos = {"x":mx, "y":my};
		if (isInBound(pos, this.btnMove)) {
			if (this.onRollMove != null){
				this.onRollMove();
			}
		}
		
		if (isInBound(pos, this.btnJump)) {
			if (this.onRollDice != null){
				this.onRollDice();
			}
		}
	}
}