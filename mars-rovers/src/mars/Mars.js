import './Mars.scss';

function Mars() {

    const size = 5;
    let cells = [];
    for (let i = size - 1; i >= 0; i--) {
        for (let j = 0; j < size; j++) {
            cells.push(j + "-" + i);
        }
    };
    return (
        <div>
            <div className="mars-container">
                {
                    cells.map(cell => (
                        <div className="mars-container_cell-container">
                            <p>{cell}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Mars;