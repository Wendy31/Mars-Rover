# INSTRUCTIONS TO RUN:
## APPLICATION
- This Mars Rover assignment is written in JavaScript following object oriented and functional programming structure. 
- Node.js is used to execute the Javascript code on the server, outside of the browser. 
    - This means your machine will need to have node and npm installed.
    - To install, get the node.js LTS version from: https://nodejs.org/en/. npm gets installed along with node automatically.
    - If you have node already, great! All you need to do is extract the zip file and run "npm install" in the terminal (or cmd) to create the node_modules folder (in the root directory, where "package.json" is) to be able to execute the code and unit test (see below for test instructions).
    - To see the logged data run "npm run rover" in the terminal.
    - You will see the output for each rover and the given plateau coordinates of 5, 5 in the terminal. 

## UNIT TEST
- For unit testing, I chose Jest which is a JavaScript test framework running on Node.js.
    - Functions from the class Rover and index.js were used for testing, as an example of unit testing.
    - Find the written tests in "rover.test.js" and "parseInput.test.js" files.
    - To execute test, simply run "npm run test" in the terminal.

## THE CODE AND LOGIC
The solution is devised using 2 classes and a main file (index.js), which is the entry point of the application where code is executed.

1. class Mars
    - generateMars(): creates Mars grid, allows its x and y coordinates to be inputted e.g. (5,5) which represents the upper-right coordinates of the plateau. 
    - addRover(): sets up a map of rovers and updates the Mars grid with rover's position by invoking updateGrid().
    - start(): starts each rover one after the other by invoking runMission() sequentially. 

2. class Rover
    - setPath(): takes the given input data as commands and sets the path for rover.
    - runMission(): takes command as individual letters to determine the rover's action, by executing the approriate functions e.g "M" executes moveForward() and "L" executes turn().
    - moveForward(): this method advances the rover one step ahead from its current position. For example, if the rover’s current direction is North and coordinates are (1,3), then the new coordinates of rover will be (1,4) along the y axis, going North.
    - turn(): method turns the rover 90 degrees to its left or right using a modulus of 4 e.g. The remainders start at 0 and increases by 1 each time, until the number reaches one less than the number we are dividing by. After that, the sequence repeats.

3. index.js
    - The main file that executes the code of the application. 
    - Imports modules of File System, class Mars and class Rover. 
    - var inputs = fs.readFileSync(): reads a file from the filesystem in sync (block until the file is read). It contains the input data via a text file (input.txt).

[GitHub link](https://github.com/Wendy31/Mars-Rover).