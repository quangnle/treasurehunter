import PaneUI from "./pane_ui";
import SlotPaneUI from "./slotpane_ui";
import ButtonUI from "./button_ui";

export default class InventoryPaneUI{
	constructor(x,y,w,h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		
		this.pane = new PaneUI(0,0,w,h,"Inventory");
		this.slotPane = new SlotPaneUI(5, 25, 46);
		this.btnUseRune = new ButtonUI(5,175,this.w-10,20,"Use Rune", "#aaa");
	}
	
	draw(){
		window.p.push();
		window.p.translate(this.x, this.y);
		
		// draw panel
		this.pane.draw();
		
		// draw slots		
		this.slotPane.draw();
		
		//draw buttons 
		if (this.model.selectedRune == null){
			this.btnUseRune.fillColor = "#faa";
		} else {
			this.btnUseRune.fillColor = "#aaa";
		}
		this.btnUseRune.draw();
		
		window.p.pop();
	}
	
	bind(model){
		this.model = model;
		this.slotPane.bind(model);
	}
	
	onClicked(mx, my){
		let pos = {"x":(mx-this.x), "y":(my-this.y)};
		console.log("dp =>" + (mx-this.x) + " " + (my-this.y));
		
		// btnUseRune is clicked
		if (this.model.selectedRune != null){
			if (window.p.isInBound(pos, this.btnUseRune)) {
				console.log("using rune",this.model.selectedRune);
				if (this.onUseRune != null && this.model.selectedRune != null){
					this.onUseRune();
				}
			}
		}
		
		if (window.p.isInBound(pos, this.slotPane)){
			this.slotPane.onClicked(pos.x, pos.y);
		}
	}
}