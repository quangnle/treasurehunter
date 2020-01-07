var Map = function(nRows, nCols){
	this.m = 	[
					[4,0,0,0,0,0,0,0,0,0,0],
					[1,1,0,0,0,0,0,0,0,0,0],
					[1,3,2,0,0,0,0,0,0,0,0],
					[3,1,1,3,0,0,0,0,0,0,0],
					[1,1,2,1,2,0,0,0,0,0,0],
					[1,1,1,2,3,1,0,0,0,0,0],
					[3,1,2,3,2,1,1,0,0,0,0],
					[2,3,3,2,1,1,1,2,0,0,0],
					[1,2,3,1,1,1,1,3,4,0,0],
					[1,1,2,3,2,1,1,2,3,2,0],
					[1,1,1,2,3,2,1,3,4,1,3]
				];
	
	this.cells = [];
	
	this.initMap = function(){
		// first corner
		for (let r = 0; r < 11; r++){
			for (let c = 0; c < r ; c++){
				this.m[11-r][11-c] = this.m[r][c];
			}
		}
		
		// now, clone this corner to other three corners
		for (r = 0; r < 11; r++){
			for (c = 0; c < 11 ; c++){
				this.m[r][20-c] = this.m[r][c];
				this.m[20-r][c] = this.m[r][c];
				this.m[20-r][20-c] = this.m[r][c];
			}
		}
		
		for (r = 0; r < 11; r++){
			this.cells[r] = [];
			for (c = 0; c < 11 ; c++){
				this.cells[r].push(new Cell("normal", this.m[r][c]));
			}
		}
	}
}