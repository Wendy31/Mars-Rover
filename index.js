var fs = require('fs');
var Rover = require('./components/rover.js');
var Mars = require('./components/mars.js');

if (process.argv.length != 3) { // validates the command line arguments passed in the terminal before running application
    console.error("Must supply input argument")
    process.exit(1);
};

var inputs = fs.readFileSync(process.argv[2], 'utf8');
var commands = inputs.split("\n");

var gs = parseGridSize(commands[0])
console.log("The upper-right coordinates of the plateau are: " + gs);
let mars = new Mars(gs[0], gs[1]);

var rover1SP = parseRoverPosition(commands[1]);
let rover1 = new Rover("Rover 1", rover1SP[0], rover1SP[1], rover1SP[2]);
rover1.setPath(commands[2]);

var rover2SP = parseRoverPosition(commands[3]);
let rover2 = new Rover("Rover 2", rover2SP[0], rover2SP[1], rover2SP[2]);
rover2.setPath(commands[4]);

mars.addRover(rover1)
mars.addRover(rover2)
mars.start();

function parseGridSize(command) {
    var gridTextArr = command.split(" ");
    return [parseInt(gridTextArr[0]), parseInt(gridTextArr[1])]
}

function parseRoverPosition(command) {
    var sP = command.split(" ");
    return [parseInt(sP[0]), parseInt(sP[1]), sP[2]];
}