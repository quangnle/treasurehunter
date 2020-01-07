var PaneUI = function(x,y,w,h,caption){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.caption = caption;
	
	this.draw = function(){
		push();
		translate(this.x, this.y);

		fill(200);
		rect(0, 0, this.w, 20);
		fill(255);
		rect(0, 20, this.w, this.h - 20);

		fill(0);
		textSize(10);
		textAlign(CENTER, CENTER);
		text(this.caption, this.w / 2, 12);

		pop();
	}
}