import PaneUI from "./pane_ui";
import ButtonUI from "./button_ui";
export default class SelectJumpRunePaneUI{
	constructor(x,y,w,h,caption){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.caption = caption;

		this.selectedIndex = -1;
		
		this.pane = new PaneUI(0,0,w,h,"Select Jump Rune");
		this.slots = [];
		for (let j=0;j<3;j++){
			this.slots.push({"idx":-1, "x":20 + (j * 50), "y": 40, "w":50, "h":50});
		}
		this.btnOK = new ButtonUI(w - 180, h - 25, 80, 20, "OK","#aaa");
		this.btnCancel = new ButtonUI(w - 90, h - 25, 80, 20, "Cancel","#aaa");
	}
	
	draw(){
		window.p.push();
		window.p.translate(this.x, this.y);
		this.pane.draw();
		
		// draw message
		window.p.textSize(12);
		window.p.textAlign(window.p.CENTER, window.p.CENTER);
		window.p.text("Do you want to use a rune for this jump? Current jump = " + this.model.dice, this.w >> 1, 30);
		
		let j = 0;
		// draw rune's frame
		for (let i=0; i<this.model.curPlayer.runes.length; i++){
			if (this.model.curPlayer.runes[i].runeType == "jump"){
				window.p.rect(20 + (j * 50), 40, 48, 48);
				window.p.image(this.model.curPlayer.runes[i].img, 20 + (j * 50), 40, 46, 46);
				if (j<3){
					this.slots[j].idx = i;
				}
				j++;
			}
		}

		// draw buttons
		this.btnOK.draw();
		this.btnCancel.draw();
		window.p.pop();
	}
	
	bind(model){
		this.model = model;
	}
	
	onClicked(mx, my){
		let pos = {"x":(mx-this.x), "y":(my-this.y)};
		console.log("dp =>" + (mx-this.x) + " " + (my-this.y));

		for (let i=0; i<this.slots.length; i++){
			if (window.p.isInBound(pos, this.slots[i])){
				console.log("selected rune",this.slots[i].idx);
				this.selectedIndex = this.slots[i].idx;
			}
		}
		
		if (window.p.isInBound(pos, this.btnOK)) {
			console.log("ok");
			if (this.onSelectJumpRune != null){
				this.onSelectJumpRune(this.selectedIndex);
			}
		}
		
		if (window.p.isInBound(pos, this.btnCancel)) {
			console.log("cancel");
			if (this.onCancelJumpRune != null){
				this.onCancelJumpRune();
			}
		}
	}
}