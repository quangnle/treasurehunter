export default class SlotPaneUI{
	constructor(x,y,s){ // 3x3
		this.x = x;
		this.y = y;
		this.slotSize = s;
		this.w = (s+4)*3;
		this.h = (s+4)*3;
	}
	
	draw(){
		window.p.push();
		window.p.translate(this.x, this.y);
		
		// draw slots		
		for(let i=0; i<3;i++){
			for(let j=0; j<3; j++){
				window.p.rect(j*(this.slotSize + 2), i*(this.slotSize + 2),this.slotSize,this.slotSize);
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
			if (i != this.selectedIndex){
				window.p.image(this.runes[i].img, (i % 3)*(this.slotSize + 2), Math.floor(i/3)*(this.slotSize + 2), this.slotSize, this.slotSize);
			} else {
				window.p.strokeWeight(4);
				window.p.rect((i%3)*(this.slotSize + 2), Math.floor(i/3)*(this.slotSize + 2),this.slotSize,this.slotSize);
				window.p.image(this.runes[i].img, (i % 3)*(this.slotSize + 2), Math.floor(i/3)*(this.slotSize + 2), this.slotSize, this.slotSize);
			}
		}
		
		window.p.pop();
	}
	
	bind(model){
		this.model = model;
	}
	
	onClicked(mx, my){
		let pos = {"x":(mx-this.x), "y":(my-this.y)};
		let mc = Math.floor(pos.x / this.slotSize);
		let mr = Math.floor(pos.y / this.slotSize);
		console.log("slot => " + mc + " " + mr);
		if (this.runes != null && this.runes.length > 0){
			this.selectedIndex = Math.min(mr*3 + mc, this.runes.length - 1);
			if (this.selectedIndex >= 0){
				this.model.selectedRune = this.model.runes[this.selectedIndex];
			}
		} else {
			this.selectedIndex = -1;
			this.model.selectedRune = null;
		}
	}
}