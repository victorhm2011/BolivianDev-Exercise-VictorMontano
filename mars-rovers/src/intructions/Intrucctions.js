import Coordinates from './coordinates/Coordinates';
import './Instrucctions.scss';
import './coordinates/Coordinates'

function Instrucctions() {
    return (
        <div>
            <div className='instrucctions-container'>
                <div className='instrucctions-container_element-container'>
                    <div>
                        <h1 className='instrucctions-container_element'>Interview Coding Problem</h1>
                    </div>
                </div>
                <div className='instrucctions-container_element-container'>
                    <h2 className='instrucctions-container_element'>Mars Rovers problem</h2>
                </div>
                <div className='instrucctions-container_element-container'>
                    <p className='instrucctions-container_element'>By: Victor Hugo Montaño</p>
                </div>
            </div>
            <Coordinates></Coordinates>
        </div>
    );
}

export default Instrucctions;