var SlotPaneUI = function(x,y,w,h,s){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.slotSize = s;
	
	this.draw = function(){
		push();
		translate(this.x, this.y);
		
		// draw slots		
		for(let i=0; i<3;i++){
			for(let j=0; j<3; j++){
				rect(j*(this.slotSize + 2), i*(this.slotSize + 2),this.slotSize,this.slotSize);
			}
		}
		
		// draw runes & selected rune
		
		pop();
	}
	
	this.bind = function(model){
		this.model = model;
	}
	
	this.onClicked = function(mx, my){
		let pos = {"x":(mx-this.x), "y":(my-this.y)};
	}
}