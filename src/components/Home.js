
const Home = ({ onGame }) => {
    
    return (
            <div className="home">
                <div className="title">TYPING GAME</div>
                <div className="author">
                    Coding & <br />
                    Design by Lun Dev
                </div>
                <button onClick={ () => onGame('playing') } className='btnPlay'>Play Game</button>
            </div>
    );
}
export default Home;