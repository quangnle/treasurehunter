var MainUI = function(w,h){
	this.w = w;
	this.h = h;
	this.controls = null;
	
	this.bind = function(model){
		this.model = model;
	}
	
	this.addControls = function(drawMode, control){
		if (this.controls[drawMode] == null) this.controls[drawMode] = [];
		this.controls[drawMode].push(control);
	}
	
	this.draw = function(){
		for (let i=0; i< this.controls[model.drawMode].length; i++){
			this.controls[drawMode][i].draw();
		}
	}
	
	this.onClicked(mx, my){
		for (let i=0; i< this.controls[model.drawMode].length; i++){
			if (this.isInBound({"x":mx, "y":my}, this.controls[drawMode][i])){
				this.controls[drawMode][i].onClicked(mx,my);
			}
		}
	}
	
	this.isInBound = function(pos, region){
		if ((pos.x > region.x && pos.x < region.x + region.w) && 
			(pos.x > region.y && pos.x < region.y + region.h)) 
			return true;
			
		return false;
	}
}