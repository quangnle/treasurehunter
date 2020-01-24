var GetRunePaneUI = function(x,y,w,h,caption){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.caption = caption;
	
	this.pane = new PaneUI(0,0,w,h,"Get Rune");
	this.btnOK = new ButtonUI(w-180,h-25,80,20,"OK","#aaa");
	this.btnCancel = new ButtonUI(w-90,h-25,80,20,"Cancel","#aaa");
	
	this.btnClose = new ButtonUI(w-90,h-25,80,20,"Close","#aaa");
	
	this.draw = function(){
		push();
		translate(this.x, this.y);
		
		this.pane.draw();
		
		// draw message
		textSize(10);
		textAlign(CENTER, CENTER);
		text("Do you want to get a rune?", this.w >> 1, 30);
		
		// draw rune's frame
		rect((this.w >> 1) - 25, 40, 50, 50);
		if (this.model.receivedRune != null){
			let img = loadImage(this.model.receivedRune.imgPath);
			image(img, (this.w >> 1) - 25,40,50,50);
			
			//draw button Close
			this.btnClose.draw();
		} else {
			// draw buttons
			this.btnOK.draw();
			this.btnCancel.draw();
		}
		
		pop();
	}
	
	this.bind = function(model){
		this.model = model;
	}
	
	this.onClicked = function(mx, my){
		let pos = {"x":(mx-this.x), "y":(my-this.y)};
		console.log("dp =>" + (mx-this.x) + " " + (my-this.y));
		
		if (this.model.receivedRune == null){ // when not yet accepting a rune
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
		} else { // already accpeted a rune
			if (isInBound(pos, this.btnClose)) {
				console.log("close");
				if (this.onClose != null){
					this.onClose();
				}
			}
		}
	}
}