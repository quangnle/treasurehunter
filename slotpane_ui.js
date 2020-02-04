var SlotPaneUI = function(x,y,w,h,s){ // 3x3
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
		
		// draw runes & selected cell
		this.runes = [];
		if (this.model.curPlayer.runes != null){
			for (let i=0; i < this.model.curPlayer.runes.length; i++){
				this.runes.push(this.model.curPlayer.runes[i]);
			}
		}
		
		for (let i=0; i < this.runes.length; i++){
			let img =loadImage(this.runes[i].img);
			if (i != this.selectedIndex){
				image(img, (i % 3)*(this.slotSize + 2), Math.floor(i/3)*(this.slotSize + 2), this.slotSize, this.slotSize);
			} else {
				strokeWeight(4);
				rect((i%3)*(this.slotSize + 2), Math.floor(i/3)*(this.slotSize + 2),this.slotSize,this.slotSize);
				image(img, (i % 3)*(this.slotSize + 2), Math.floor(i/3)*(this.slotSize + 2), this.slotSize, this.slotSize);
			}
		}
		
		pop();
	}
	
	this.bind = function(model){
		this.model = model;
	}
	
	this.onClicked = function(mx, my){
		let pos = {"x":(mx-this.x), "y":(my-this.y)};
		let mc = Math.floor(pos.x / this.slotSize);
		let mr = Math.floor(pos.y / this.slotSize);
		this.selectedIndex = Math.min(mr*3 + mc, this.runes.length - 1);
		console.log("slot => " + mc + " " + mr);
	}
}