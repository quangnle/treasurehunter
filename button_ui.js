var ButtonUI = function(x,y,w,h,caption,fillColor){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.caption = caption;
	this.fillColor = fillColor;
	
	this.draw = function(){
		push();
		translate(this.x, this.y);
		
		fill(this.fillColor);
        rect(0, 0, this.w, this.h);

        fill(0);
        textSize(10);
        textAlign(CENTER, CENTER);
        text(this.caption, this.w / 2, 12);
		
		pop();
	}
}