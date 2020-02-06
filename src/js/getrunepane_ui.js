import PaneUI from "./pane_ui";
import ButtonUI from "./button_ui";
export default class GetRunePaneUI{
	constructor(x,y,w,h,caption){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.caption = caption;
		
		this.pane = new PaneUI(0,0,w,h,"Get Rune");
		this.btnOK = new ButtonUI(w-180,h-25,80,20,"OK","#aaa");
		this.btnCancel = new ButtonUI(w-90,h-25,80,20,"Cancel","#aaa");
		
		this.btnClose = new ButtonUI(w-90,h-25,80,20,"Close","#aaa");
	}
	
	draw(){
		window.p.push();
		window.p.translate(this.x, this.y);
		
		this.pane.draw();
		
		// draw message
		window.p.textSize(10);
		window.p.textAlign(window.p.CENTER, window.p.CENTER);
		window.p.text("Do you want to get a rune?", this.w >> 1, 30);
		
		// draw rune's frame
		window.p.rect((this.w >> 1) - 25, 40, 50, 50);
		if (this.model.receivedRune != null){
			let img = window.p.loadImage(this.model.receivedRune.imgPath);
			window.p.image(img, (this.w >> 1) - 25,40,50,50);
			
			//draw button Close
			this.btnClose.draw();
		} else {
			// draw buttons
			this.btnOK.draw();
			this.btnCancel.draw();
		}
		
		window.p.pop();
	}
	
	bind(model){
		this.model = model;
	}
	
	onClicked(mx, my){
		let pos = {"x":(mx-this.x), "y":(my-this.y)};
		console.log("dp =>" + (mx-this.x) + " " + (my-this.y));
		
		if (this.model.receivedRune == null){ // when not yet accepting a rune
			if (window.p.isInBound(pos, this.btnOK)) {
				console.log("ok");
				if (this.onAcceptRune != null){
					this.onAcceptRune();
				}
			}		
			if (window.p.isInBound(pos, this.btnCancel)) {
				console.log("cancel");
				if (this.onIgnoreRune != null){
					this.onIgnoreRune();
				}
			}
		} else { // already accpeted a rune
			if (window.p.isInBound(pos, this.btnClose)) {
				console.log("close");
				if (this.onClose != null){
					this.onClose();
				}
			}
		}
	}
}