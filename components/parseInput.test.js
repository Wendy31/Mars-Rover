const { parseRoverPosition, parseGridSize } = require("./parseInput")

test('parseRoverPosition returns array of position', () => {
    expect(parseRoverPosition("1 2 N")).toEqual([1, 2, "N"]);
});

test('parseGridSize returns array of grid sizes', () => {
    expect(parseGridSize("5 5")).toEqual([5, 5]);
});