var MainUI = function(w,h){
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
	
	this.addControl = function(drawMode, control){
		if (this.controls[drawMode] == null){
			this.controls[drawMode] = [];
			this.modes.push(drawMode);
		}
		this.controls[drawMode].push(control);
	}
	
	this.draw = function(){
		
		for (let i=0; i< this.controls[this.model.drawMode].length; i++){
			this.controls[this.model.drawMode][i].draw();
		}
	}
	
	this.onClicked = function(mx, my){
		
		for (let i=0; i< this.controls[this.model.drawMode].length; i++){
			if (isInBound({"x":mx, "y":my}, this.controls[this.model.drawMode][i])){
				this.controls[this.model.drawMode][i].onClicked(mx,my);
			}
		}
	}
}