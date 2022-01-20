import './Mars.scss';

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

    

    return (
        <div id="mars-component">
            <div className="mars-container">
                {
                    cells.map(cell => (
                        <div className="mars-container_cell-container">
                            <p>{cell}</p>
                            <p>{coordinates}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Mars;