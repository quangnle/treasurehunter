var BoardUI = function (x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	this.initPlayerImages = function(){
		let player1 = loadImage("imgs/p1.png");
		let player2 = loadImage("imgs/p2.png");
		let player3 = loadImage("imgs/p3.png");
		let player4 = loadImage("imgs/p4.png");
		
		let evil1 = loadImage("imgs/p1z.png");
		let evil2 = loadImage("imgs/p2z.png");
		let evil3 = loadImage("imgs/p3z.png");
		let evil4 = loadImage("imgs/p4z.png");
		
		this.plImages = [{"human":player1, "evil":evil1}, {"human":player2, "evil":evil2}, {"human":player3, "evil":evil3}, {"human":player4, "evil":evil4}];
	}
	
	this.initTileImages = function(){
		let tile1 = loadImage("imgs/tile1.png");
		let tile2 = loadImage("imgs/tile2.png");
		let tile3 = loadImage("imgs/tile3.png");
		let tile4 = loadImage("imgs/tile4.png");
		let start = loadImage("imgs/start.png");
		let gate = loadImage("imgs/gate.png");
		let chest = loadImage("imgs/chest_small.png");
		
		this.tiles = [tile1, tile2, tile3, tile4, start, gate, chest];
	}
	
	this.draw = function(){
		push();
		translate(this.x, this.y);
		
		// draw tiles
		if(this.model !=null){
			for(let r = 0; r < this.model.board.nRows; r++){
				for(let c = 0; c < this.model.board.nCols; c++){				
					if(this.model.board.cells[r][c].cellType=="normal"){
						image(this.tiles[this.model.board.cells[r][c].value - 1], r*30, c*30);
					} else if (this.model.board.cells[r][c].cellType == "start"){
						image(this.tiles[4], r*30, c*30);
					} else if (this.model.board.cells[r][c].cellType == "gate"){
						image(this.tiles[5], r*30, c*30);
					} else {
						image(this.tiles[6], r*30, c*30);
					}					
				}
			}
			
			for (let i=0; i< this.model.board.players.length; i++){
				let player = this.model.board.players[i];
				if (player.state == "human"){
					image(this.plImages[i].human, player.r * 30, player.c * 30);
				} else {
					image(this.plImages[i].evil, player.r * 30, player.c * 30);
				}
			}
			
			stroke("#ddd");
			for(let i = 0; i<=21; i++){
				line(0,i*30,630,i*30);
				line(i*30,0,i*30,630);
			}
		}
		
		pop();
	}
	
	this.bind = function(model){
		this.model = model;
	}
}