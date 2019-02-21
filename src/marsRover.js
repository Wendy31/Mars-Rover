//....................................MARS CLASS.........................................//
class Mars {

    constructor(axisX, axisY) {
        this.coordinateX = axisX + 1;
        this.coordinateY = axisY + 1;
    }

    createGrid() {
        for (let i = 0; i < this.coordinateY; i++) {
            var table = document.getElementById("table");
            var row = table.insertRow(0);

            var cell1 = row.insertCell();
            cell1.innerHTML = i;

            for (let j = 1; j < this.coordinateX; j++) {
                var cell2 = row.insertCell(-1);
                cell2.innerHTML = j + "." + i;
            }
        }
    }
}

//....................................ROVER CLASS.........................................//
class Rover {

    constructor(name) {
        this.name = name;
        this.directions = ["N", "E", "S", "W"];
        this.path = null;
        this.position = null;
        this.facing = null;
        this.isInMovement = false;
    }

    startingPosition(positionX, positionY, facing) {
        this.position = [positionX, positionY];
        this.facing = facing;
    }

    setPath(commands) {
        this.path = commands;
    }

    async runMission() {
        this.isInMovement = true;
        for (var i = 0; i < this.path.length; i++) {
            var command = this.path[i];
            if (command == "M") {
                await this.waitOneSecond();
                this.moveForward(command);
                console.log(this.name + " is moving...");
            } else if (command == "L" || command == "R") {
                await this.waitOneSecond();
                this.turn(command);
                console.log(this.name + " is turning...")
            }
        }
        this.isInMovement = false;
        console.log("I am " + this.name + ": at position " + this.position + " facing " + this.facing);
    }

    waitOneSecond() {
        return new Promise(function (resolve) {
            setTimeout(resolve, 1000)
        });
    }

    turn(command) {
        var cardinalIndex = this.getDirectionIndex(this.facing); // e.g. 0
        if (command == "L") {
            cardinalIndex = (cardinalIndex + 4 - 1) % 4; // 0 = 3
        } else if (command == "R") {
            cardinalIndex = (cardinalIndex + 1) % 4; // 0 = 1
        }
        this.facing = this.directions[cardinalIndex]; // LEFT: "N" = "W" or RIGHT: "N" = "E"
        console.log(this.facing);
    }

    getDirectionIndex(direction) { // returns index of cardinal compass points
        for (var i = 0; i < this.directions.length; i++) {
            if (direction == this.directions[i]) { // e.g. if "N" = "N"
                return i;
            }
        }
    }

    moveForward(command) {
        if (command == "M") {
            var coordinateX = this.position[0];
            var coordinateY = this.position[1];
            if (this.facing == "N") {
                coordinateY++;
            } else if (this.facing == "E") {
                coordinateX++;
            } else if (this.facing == "S") {
                coordinateY--;
            } else if (this.facing == "W") {
                coordinateX--;
            }
        } else {
            alert("Incorrect command");
        }
        var newPosition = [coordinateX, coordinateY];
        this.position = newPosition;
        console.log(this.position);
    }
}


//...................................ROVER LAUNCHER CLASS....................................//
class RoverLauncher {

    constructor() {
        this.rovers = [];
        this.missionFinished = false;
    }

    addRoverToMission(rover) {
        this.rovers.push(rover);
    }

    async start() {
        for (var i = 0; i < this.rovers.length; i++) {
            await this.rovers[i].runMission(); // rovers to start sequentially 
        }
        this.missionFinished = true;
    }
}


//.................................FUNCTION INVOCATION.................................//
let mars = new Mars(5, 5); // constructor invocation creates new object. New object inherits properties and methods from its constructor.
mars.createGrid();

// create rovers
let rover1 = new Rover("Rover 1");
let rover2 = new Rover("Rover 2");

// invoke methods in each rover
rover1.startingPosition(1, 2, "N");
rover1.setPath("LMLMLMLMM");

rover2.startingPosition(3, 3, "E");
rover2.setPath("MMRMMRMRRM");

// connect rover objects 
let roverLauncher = new RoverLauncher();
roverLauncher.addRoverToMission(rover1);
roverLauncher.addRoverToMission(rover2);
roverLauncher.start(); 
