var Board = function(nRows, nCols){
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
	this.nRows = nRows;
	this.nCols = nCols;
	
	this.initMap = function(){
		
		for (let r = 0; r < 21; r++){
			this.cells[r] = [];
			for (let c = 0; c < 21 ; c++){
				this.cells[r].push(new Cell("normal", 0));
			}
		}
		
		for (r = 0; r < 11; r++){
			for (c = 0; c <= r ; c++){
				this.cells[r][c].value = this.m[r][c];
				this.cells[c][r].value = this.m[r][c];
			}
		}
		
		// now, clone this corner to other three corners
		for (r = 0; r < 11; r++){
			for (c = 0; c < 11 ; c++){
				this.cells[r][20-c].value = this.cells[r][c].value;
				this.cells[20-r][c].value = this.cells[r][c].value;
				this.cells[20-r][20-c].value = this.cells[r][c].value;
			}
		}
		
		// now, place special items on map
		// treasure
		this.cells[10][10].cellType = "treasure";
		
		// starts
		this.cells[0][0].cellType = "start";
		this.cells[20][0].cellType = "start";
		this.cells[0][20].cellType = "start";
		this.cells[20][20].cellType = "start";
		
		// gates
		this.cells[3][3].cellType = "gate";
		this.cells[3][17].cellType = "gate";
		this.cells[17][3].cellType = "gate";
		this.cells[17][17].cellType = "gate";
		
		// create players
		let player1 = new Player("Quang", 100000, 0, 0);
		let player2 = new Player("Quoc", 100000, 0, 20);
		let player3 = new Player("Phuc", 100000, 20, 0);
        let player4 = new Player("Nam", 100000, 20,20);
		
        this.players = [player1, player2, player3, player4];
		
	}
}