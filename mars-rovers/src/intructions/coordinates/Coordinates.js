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

    //functions
    function setPosition(inputX, inputY, inputFacing) {
        x = inputX;
        y = inputY;
        facing = inputFacing;
    }

    function turnLeft() {
        facing = (facing - 1) < N ? W : facing - 1;
    }

    function turnRight() {
        facing = (facing + 1) > W ? N : facing + 1;
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