export default class BoardUI{
	constructor(x,y,w,h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.cellSize = 30;	
	}
	
	initPlayerImages(){
		let player1 = window.p.loadImage("imgs/p1.png");
		let player2 = window.p.loadImage("imgs/p2.png");
		let player3 = window.p.loadImage("imgs/p3.png");
		let player4 = window.p.loadImage("imgs/p4.png");
		
		let evil1 = window.p.loadImage("imgs/p1z.png");
		let evil2 = window.p.loadImage("imgs/p2z.png");
		let evil3 = window.p.loadImage("imgs/p3z.png");
		let evil4 = window.p.loadImage("imgs/p4z.png");
		
		this.plImages = [{"human":player1, "evil":evil1}, {"human":player2, "evil":evil2}, {"human":player3, "evil":evil3}, {"human":player4, "evil":evil4}];
	}
	
	initTileImages(){
		let tile1 = window.p.loadImage("imgs/tile1.png");
		let tile2 = window.p.loadImage("imgs/tile2.png");
		let tile3 = window.p.loadImage("imgs/tile3.png");
		let tile4 = window.p.loadImage("imgs/tile4.png");
		let start = window.p.loadImage("imgs/start.png");
		let gate = window.p.loadImage("imgs/gate.png");
		let chest = window.p.loadImage("imgs/chest_small.png");
		
		this.tiles = [tile1, tile2, tile3, tile4, start, gate, chest];
	}
	
	draw(){
		window.p.push();
		window.p.translate(this.x, this.y);
		
		// draw tiles
		if(this.model !=null){
			for(let r = 0; r < this.model.board.nRows; r++){
				for(let c = 0; c < this.model.board.nCols; c++){				
					if(this.model.board.cells[r][c].cellType=="normal"){
						window.p.image(this.tiles[this.model.board.cells[r][c].value - 1], c*this.cellSize, r*this.cellSize);
					} else if (this.model.board.cells[r][c].cellType == "start"){
						window.p.image(this.tiles[4], c*this.cellSize, r*this.cellSize);
					} else if (this.model.board.cells[r][c].cellType == "gate"){
						window.p.image(this.tiles[5], c*this.cellSize, r*this.cellSize);
					} else {
						window.p.image(this.tiles[6], c*this.cellSize, r*this.cellSize);
					}					
				}
			}
			
			for (let i=0; i< this.model.board.players.length; i++){
				let player = this.model.board.players[i];
				if (player.state == "human"){
					window.p.image(this.plImages[i].human, player.c * this.cellSize + 5, player.r * this.cellSize + 5);
				} else {
					window.p.image(this.plImages[i].evil, player.c * this.cellSize + 5, player.r * this.cellSize + 5);
				}
			}
			
			window.p.stroke("#ddd");
			for(let i = 0; i<=21; i++){
				window.p.line(0,i*this.cellSize,630,i*this.cellSize);
				window.p.line(i*this.cellSize,0,i*this.cellSize,630);
			}
			
			window.p.noFill();
			window.p.stroke(0);	
			window.p.strokeWeight(3);
			window.p.rect(this.model.curPlayer.c * this.cellSize, this.model.curPlayer.r * this.cellSize, this.cellSize, this.cellSize);
		}
		
		window.p.pop();
	}
	
	bind(model){
		this.model = model;
	}
}