export default class PaneUI {
	constructor(x,y,w,h,caption){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.caption = caption;
	}
	
	draw(){
		window.p.push();
		window.p.translate(this.x, this.y);

		window.p.fill(200);
		window.p.rect(0, 0, this.w, 20);
		window.p.fill(255);
		window.p.rect(0, 20, this.w, this.h - 20);

		window.p.fill(0);
		window.p.textSize(10);
		window.p.textAlign(window.p.CENTER, window.p.CENTER);
		window.p.text(this.caption, this.w / 2, 12);

		window.p.pop();
	}
}