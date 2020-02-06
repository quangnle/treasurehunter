import PaneUI from "./pane_ui";
import ButtonUI from "./button_ui";
export default class SelectJumpRunePaneUI{
	constructor(x,y,w,h,caption){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.caption = caption;
		
		this.pane = new PaneUI(0,0,w,h,"Select Jump Rune");
		this.btnOK = new ButtonUI(w - 180, h - 25, 80, 20, "OK");
		this.btnCancel = new ButtonUI(w - 90, h - 25, 80, 20, "Cancel");
	}
	
	draw(){
		this.pane.draw();
		
		// draw message
		window.p.textSize(12);
		window.p.textAlign(CENTER, CENTER);
		window.p.text("Do you want to get a rune?", w >> 1, 20);
		
		// draw rune's frame
		window.p.rect((w >> 1) - 25, 40, 50, 50);
		
		// draw buttons
		this.btnOK.draw();
		this.btnCancel.draw();
	}
	
	bind(model){
		this.model = model;
	}
	
	onClicked(mx, my){
		let pos = {"x":(mx-this.x), "y":(my-this.y)};
		console.log("dp =>" + (mx-this.x) + " " + (my-this.y));
		
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
	}
}