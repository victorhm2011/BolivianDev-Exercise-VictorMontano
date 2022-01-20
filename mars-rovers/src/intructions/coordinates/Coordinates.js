import './Coordinates.scss';
import { useState } from "react";

function Coordinates() {
    //constants
    const N = 1;
    const E = 2;
    const S = 3;
    const W = 4;

    //variables
    let x = 0;
    let y = 0;
    let facing = N;
    let direcction = 'N';

    //functions
    function setPosition(inputX, inputY, inputFacing) {
        x = inputX;
        y = inputY;
        facing = inputFacing;
    }

    function resetVariables(){
        x = 0;
        y = 0;
        facing = N;
        direcction = 'N';
    }

    function turnLeft() {
        facing = (facing - 1) < N ? W : facing - 1;
    }

    function turnRight() {
        facing = (facing + 1) > W ? N : facing + 1;
    }

    function move() {
        if (facing == N) {
            y++;
        } else if (facing == E) {
            x++;
        } else if (facing == S) {
            y--;
        } else if (facing == W) {
            x--;
        }
    }

    function processMovements(command) {
        if (command == 'L') {
            turnLeft();
        } else if (command == 'R') {
            turnRight();
        } else if (command == 'M') {
            move();
        } else {
            alert("Incorrect command to move rover, please use: L or R or M");
        }
    }

    function process(commands) {
        for (let idx = 0; idx < commands.length; idx++) {
            processMovements(commands[idx]);
        }
    }

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs.coordinates);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Start position:
                <input 
                    type="text" 
                    name="start" 
                    value={inputs.start || ""} 
                    onChange={handleChange}
                />
                </label>
                <label>Coordinates:
                    <input 
                    type="text" 
                    name="coordinates" 
                    value={inputs.coordinates || ""} 
                    onChange={handleChange}
                    />
                </label>
                <input type='submit' value='Execute'/>
            </form>
        </div>
    )
}

export default Coordinates;