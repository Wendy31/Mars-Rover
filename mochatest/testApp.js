module.exports.roverClass = class Rover {

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
        var cardinalIndex = this.getDirectionIndex(this.facing);
        if (command == "L") {
            cardinalIndex = (cardinalIndex + 4 - 1) % 4;
        } else if (command == "R") {
            cardinalIndex = (cardinalIndex + 1) % 4;
        }
        this.facing = this.directions[cardinalIndex];
        console.log(this.facing);
    }

    getDirectionIndex(direction) {
        for (var i = 0; i < this.directions.length; i++) {
            if (direction == this.directions[i]) {
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