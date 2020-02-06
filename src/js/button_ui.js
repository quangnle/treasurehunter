export default class ButtonUI{
	constructor(x,y,w,h,caption,fillColor){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.caption = caption;
		this.fillColor = fillColor;
	}
	
	draw(){
		window.p.push();
		window.p.translate(this.x, this.y);
		
		window.p.fill(this.fillColor);
        window.p.rect(0, 0, this.w, this.h);

        window.p.fill(0);
        window.p.textSize(10);
        window.p.textAlign(window.p.CENTER, window.p.CENTER);
        window.p.text(this.caption, this.w / 2, 12);
		
		window.p.pop();
	}
}