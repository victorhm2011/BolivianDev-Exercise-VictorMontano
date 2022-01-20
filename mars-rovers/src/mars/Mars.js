import './Mars.scss';
import {render} from "react-dom";

function Mars({coordinates}) {
    //consts
    const size = 5;
    let cells = [];
    for (let i = size - 1; i >= 0; i--) {
        for (let j = 0; j < size; j++) {
            cells.push(j + "-" + i);
        }
    };

    //variables
    let cellCoordinates = '0-0';
    let direcction = 'N';
    let cellClass = "mars-container_cell-container";
    let showDirection = '-';

    function transformCoordinates() {
        cellCoordinates = coordinates[0] + '-' + coordinates[2];
        direcction = coordinates[1];
    }

    //call functions
    transformCoordinates();

    return (
        <div id="mars-component">
            <div className="mars-container">
                {cells.map(cell => {
                        if(cell === cellCoordinates){
                            cellClass = cellClass + ' selected';
                            showDirection = direcction;
                        } else {
                            cellClass = "mars-container_cell-container";
                            showDirection = '-';
                        }
                        return (
                        <div id={cell} className={cellClass}>
                            <p>{cell}</p>
                            <p>{showDirection}</p>
                        </div>);
                })}
            </div>
        </div>
    );
}

export default Mars;