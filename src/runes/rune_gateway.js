export default class RuneGateway{
	constructor(){
		this.name = "g";
		this.runeType = "gateway"; // move, jump, luck, unluck, gateway
		this.description = "back to the nearest gateway";
		this.owner = null;
		this.imgPath = "imgs/r_gateway.png";
		this.img = window.p.loadImage(this.imgPath);
	}
	
	apply(){
		let curPlayer = window.p.processor.model.curPlayer;
		let minDist = 10000;
		let idx = 0;
		
		// find the nearest gateway
		for (let i=0; i< processor.model.board.gateways.length; i++){
			let g = processor.model.board.gateways[i];
			let d = (g.r - curPlayer.r)*(g.r - curPlayer.r) + (g.c - curPlayer.c)*(g.c - curPlayer.c);
			if (minDist > d){
				minDist = d;
				idx = i;
			}
		}
		
		// set position to player
		processor.model.curPlayer.r = processor.model.board.gateways[idx].r;
		processor.model.curPlayer.c = processor.model.board.gateways[idx].c;
	}
}