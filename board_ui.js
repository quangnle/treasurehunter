var BoardUI = function (x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	this.draw = function(){
		translate(this.x, this.y);
		push();
		
		// draw board
		if(this.model !=null){
		}
		
		pop();
	}
	
	this.bind = function(model){
	}
}