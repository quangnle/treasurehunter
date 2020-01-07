var BoardUI = function (x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
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
			for(let r = 0; r < this.model.nRows; r++){
				for(let c = 0; c < this.model.nCols; c++){
					if(this.model.map.cell[r][c].cellType=="normal"){
						img(r*30, c*30, tiles[this.map.cells[r][c].value - 1]);
					} else if (this.model.map.cell[r][c].cellType == "start"){
						img(r*30, c*30, tiles[4]);
					} else if (this.model.map.cell[r][c].cellType == "gate"){
						img(r*30, c*30, tiles[5]);
					} else {
						img(r*30, c*30, tiles[6]);
					}
				}
			}
		}
		
		pop();
	}
	
	this.bind = function(model){
		this.model = model;
	}
}