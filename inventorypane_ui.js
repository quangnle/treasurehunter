var InventoryPaneUI = function(x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	this.pane = new PaneUI(0,0,w,h,"Dices");
	this.btnUseRune = new ButtonUI(5,90,w-10,20,"Use Rune", "#aaa");
	
	
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
		if (!this.model.canUseRune){
			this.btnUseRune.fillColor = "#faa";
		} else {
			this.btnUseRune.fillColor = "#aaa";
		}
		this.btnUseRune.draw();
		
		pop();
	}
	
	this.bind = function(model){
		this.model = model;
	}
	
	this.onClicked = function(mx, my){
		let pos = {"x":(mx-this.x), "y":(my-this.y)};
		console.log("dp =>" + (mx-this.x) + " " + (my-this.y));
		
		// btnUseRune is clicked
		if (this.model.canUseRune){
			if (isInBound(pos, this.btnUseRune)) {
				console.log("rune");
				if (this.onUseRune != null && this.model.selectedRune != null){
					this.onUseRune();
				}
			}
		}
	}
}