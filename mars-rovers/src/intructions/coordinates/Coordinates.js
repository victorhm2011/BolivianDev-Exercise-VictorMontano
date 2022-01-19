import './Coordinates.scss';
import { useState } from "react";

function Coordinates() {
    //constants
    const N = 1;
    const E = 2;
    const S = 3;
    const W = 4;

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