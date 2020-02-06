export default class MainUI {
	constructor(w,h){
		this.controls = [];
		this.modes = [];
		
		this.bind = function(model){
			this.model = model;
			for (let i=0; i<this.modes.length; i++){
				for (let j=0; j<this.controls[this.modes[i]].length; j++){
					if (this.controls[this.modes[i]][j].bind != null){
						this.controls[this.modes[i]][j].bind(model);
					}
				}
			}
		}
	}
	
	addControl (drawMode, control){
		if (this.controls[drawMode] == null){
			this.controls[drawMode] = [];
			this.modes.push(drawMode);
		}
		this.controls[drawMode].push(control);
	}
	
	draw(){
		for (let i=0; i< this.controls[this.model.drawMode].length; i++){
			this.controls[this.model.drawMode][i].draw();
		}
	}
	
	onClicked(mx, my){
		
		for (let i=0; i< this.controls[this.model.drawMode].length; i++){
			if (window.p.isInBound({"x":mx, "y":my}, this.controls[this.model.drawMode][i])){
				if (this.controls[this.model.drawMode][i].onClicked){
					this.controls[this.model.drawMode][i].onClicked(mx,my);
				}
			}
		}
	}
}