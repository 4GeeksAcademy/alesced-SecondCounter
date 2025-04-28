


function SecondCounter({seconds}) {
    return (
        <div className="container mt-5">
            <div className="row bg-dark text-white">
                <div className="col"><i class="fas fa-clock"></i></div>
                <div className="col">{Math.floor (seconds / 100000) % 10}</div>
                <div className="col">{Math.floor (seconds / 10000) % 10}</div>
                <div className="col">{Math.floor (seconds / 1000) % 10}</div>
                <div className="col">{Math.floor (seconds / 100) % 10}</div>
                <div className="col">{Math.floor (seconds / 10) % 10}</div>
                <div className="col">{Math.floor (seconds / 1) % 10}</div>
            </div>
        </div>
    )


}

export default SecondCounter;