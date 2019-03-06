module.exports = class Mars {

    constructor(axisX, axisY) {
        this.X = axisX;
        this.Y = axisY;
        this.grid = Array();
        this.rovers = new Map();
        this.generateMars();
    }

    generateMars() {
        var xArray = new Array(this.X);
        for (var i = 0; i < this.Y; i++) {
            xArray[i] = " ";
        }
        for (var i = 0; i < this.Y; i++) {
            this.grid[i] = xArray.slice(0);
        }
    }

    addRover(rover) {
        this.rovers.set(rover.name, rover);
        this.updateGrid(rover.name, rover.position[0], rover.position[1]);
    }

    updateGrid(roverName, x, y) {
        for (var i = 0; i < this.X; i++) {
            for (var j = 0; j < this.Y; j++) {
                if (this.grid[i][j] === roverName) {
                    this.grid[i][j] = " ";
                }
            }
        }
        this.grid[(this.Y - y)][x - 1] = roverName;
    }

    start() {
        this.rovers.forEach((rover) => {
            rover.runMission();
        })
    }
}