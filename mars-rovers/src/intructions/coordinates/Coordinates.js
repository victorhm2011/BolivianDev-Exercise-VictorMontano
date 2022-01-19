import './Coordinates.scss';

function Coordinates() {
    return (
        <div>
            <div>
                <label>
                    Start position:
                    <input type="text" name="start" />
                </label>
            </div>
            <div>
                <label>
                    Coordinates: 
                    <input type="text" name="coordinates"/>
                </label>
            </div>
            <div>
                <input type='submit' value='Execute'/>
            </div>
        </div>
    );
}

export default Coordinates;