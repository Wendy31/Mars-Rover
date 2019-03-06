function parseGridSize(command) {
    var gridTextArr = command.split(" ");
    return [parseInt(gridTextArr[0]), parseInt(gridTextArr[1])]
}

function parseRoverPosition(command) {
    var sP = command.split(" ");
    return [parseInt(sP[0]), parseInt(sP[1]), sP[2]];
}

module.exports = {
    parseRoverPosition,
    parseGridSize
};