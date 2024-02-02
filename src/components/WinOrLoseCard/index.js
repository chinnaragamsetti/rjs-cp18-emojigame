// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {scoredetails, playedAgain} = props
  // const {score} = scoredetails
  //  console.log(score)
  console.log(scoredetails)
  const playAgain = () => {
    playedAgain()
  }

  if (scoredetails === 12) {
    return (
      <div className="winlosecontainer">
        <div className="mattercontainer">
          <h1 className="winlose">You Won</h1>
          <p className="best">Best Score</p>
          <p className="outofscore">{scoredetails}/12</p>
          <button type="button" className="playagain" onClick={playAgain}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="winloseimage"
        />
      </div>
    )
  }
  return (
    <div className="winlosecontainer">
      <div className="mattercontainer">
        <h1 className="winlose">You Lose</h1>
        <p className="best">Score</p>
        <p className="outofscore">{scoredetails}/12</p>
        <button type="button" onClick={playAgain} className="playagain">
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="winloseimage"
      />
    </div>
  )
}

export default WinOrLoseCard
