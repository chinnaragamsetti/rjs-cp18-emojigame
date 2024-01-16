// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score,playedAgain} = props
  const playAgain=()=>{
      playedAgain()
  }
    if (score===12){
        return(
            <div className="winlosecontainer">
            <div className="mattercontainer">
                <h1 className="winlose">You Won</h1>
                <p className="best">Best Score</p>
                <p className="outofscore">{score}/12</p>
                <button type="button" className="playagain">
                Play Again
                </button>
            </div>
            <img
                src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                alt="lose"
                className="winloseimage"
            />
            </div>
        )
      }
    return (
        <div className="winlosecontainer">
      <div className="mattercontainer">
        <h1 className="winlose">You Lose</h1>
        <p className="best">Best Score</p>
        <p className="outofscore">{score}/12</p>
        <button type="button" onClick={playAgain} className="playagain">
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="lose"
        className="winloseimage"
      />
    </div>
    )
    
  )
}

export default WinOrLoseCard
