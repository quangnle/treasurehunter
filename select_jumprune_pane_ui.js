var SelectJumpRunePaneUI = function(x,y,w,h,caption){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.caption = caption;
	
	this.pane = new PaneUI(0,0,w,h,"Select Jump Rune");
	this.btnOK = new ButtonUI(w - 180, h - 25, 80, 20, "OK");
	this.btnCancel = new ButtonUI(w - 90, h - 25, 80, 20, "Cancel");
	
	this.draw = function(){
		this.pane.draw();
		
		// draw message
		textSize(12);
		textAlign(CENTER, CENTER);
		text("Do you want to get a rune?", w >> 1, 20);
		
		// draw rune's frame
		rect((w >> 1) - 25, 40, 50, 50);
		
		// draw buttons
		this.btnOK.draw();
		this.btnCancel.draw();
	}
	
	this.bind = function(model){
		this.model = model;
	}
	
	this.onClicked = function(mx, my){
		let pos = {"x":(mx-this.x), "y":(my-this.y)};
		console.log("dp =>" + (mx-this.x) + " " + (my-this.y));
		
		if (isInBound(pos, this.btnOK)) {
			console.log("ok");
			if (this.onAcceptRune != null){
				this.onAcceptRune();
			}
		}
		
		if (isInBound(pos, this.btnCancel)) {
			console.log("cancel");
			if (this.onIgnoreRune != null){
				this.onIgnoreRune();
			}
		}
	}
}