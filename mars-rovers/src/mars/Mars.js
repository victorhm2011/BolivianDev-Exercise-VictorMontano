import './Mars.scss';

function Mars() {

    let cells = [1,2,3,4,5,6,7,8,9]
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