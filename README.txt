INTRODUCTION
- This Mars Rover assignment is written in JavaScript following object oriented and functional programming structure. 
- A very basic grid-like table is dynamically created using HTML and JS, with no style or real purpose other than as visual aid. 
- Use the browser console to inspect and see logged outputs of the application. 

PREREQUISITES 
- For unit testing, I chose Mocha which is a JavaScript test framework running on Node.js and in the browser. And Chai, which is a TDD assertion library, to pair with Mocha.
   - This means your machine should have node and npm installed.
   - To install, get the node.js LTS version from: https://nodejs.org/en/. npm gets installed along with node automatically.
   - If you have node already, great! All you need to do is run "npm install" in your terminal (or cmd) to create the node_modules folder (inside "mochatest folder", where "package.json" is) to be able to execute the test. 

- Change THREE .txt files to .js files. These files are in:
    - mochatest folder: "test.txt" and "testApp.txt"
    - src folder: "marsRover.txt"


THE CODE AND LOGIC
The solution is devised using 3 classes:

1) class Mars
    - The class is used to hold the coordinates of mars plateau grid.
    - The mars constructor can be invoked and allows its x and y coordinates to be inputted e.g. (5,5) represents the upper-right coordinates of the plateau, and (0,0) as the bottom-left.

2) class Rover
    - This class contains and maintains the rover position (coordinates and direction faced). 
    - It also contains the given input data as commands issued to the rover.

    BRIEF EXPLANATION OF SOME FUNCTIONS USED:
    - runMission(): takes command line as string of letters and determines the rover's action, by executing the approriate methods e.g "M" executes moveForward() and "L" executes turn().
    - waitOneSecond(): I added 1 second pause between each movement to emulate the steps the rover is taking (for visual purposes).
    - moveForward(): this method advances the rover one step ahead from its current position. For example if the rover’s current direction is North and coordinates are (1,3), then the new coordinates of rover will be (1,4) along the y axis, going North.
    - turn(): method turns the rover 90 degrees to its left or right using a modulus of 4 e.g. The remainders start at 0 and increases by 1 each time, until the number reaches one less than the number we are dividing by. After that, the sequence repeats.
    - getDirectionIndex(): returns index of cardinal compass points i.e. the position of the letters in an array.

3) class RoverLauncher
    - The class is used to connect the rovers
    - addRoverToMission(): accepts rover object as parameter and stored in an array.
    - start(): determines who starts first (by order of elements inside array), and therefore sequentially thereafter invoking runMission().


UNIT TEST
    - Various methods of the class Rover were used as examples of testing.
    - Find the written test in "test.js" file.
    - To run test: in your terminal, enter the "mochatest" folder and run "npm test". 


GitHub link: 
