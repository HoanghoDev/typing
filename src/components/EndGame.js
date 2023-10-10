
const EndGame = ({ score, onGame }) => {
    
    return (
            <div className="endGame">
                <div className="result">
                    <div>
                        <div className="title">
                            Correct answer
                        </div>
                        <div className="number">
                            { score.right }
                        </div>
                    </div>
                    <div>
                        <div className="title">
                            Wrong answer
                        </div>
                        <div className="number">
                        { score.wrong }
                        </div>
                    </div>
                </div>
                <button onClick={ () => onGame('playing') } className='btnPlay'>Play Game Again</button>
            </div>
    );
}
export default EndGame;