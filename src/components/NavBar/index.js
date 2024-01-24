// Write your code here.
import './index.css'

const NabBar = props => {
  const {scoreDetails, topScore, repeatedCount} = props
  // const {score} = scoreDetails
  // const {topscore} = topScore

  // console.log(score)
  if (repeatedCount !== 0) {
    return (
      <div className="navbarcontainer">
        <div className="logocontainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo"
          />
          <h1 className="logoheading">Emoji Game</h1>
        </div>
      </div>
    )
  }
  return (
    <div className="navbarcontainer">
      <div className="logocontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emojilogo"
          className="logo"
        />
        <h1 className="logoheading">Emoji Game</h1>
      </div>
      <div className="scorecontainer">
        <p className="score">{`Score: ${scoreDetails}`}</p>
        <p className="topscore">{`Top Score: ${topScore}`}</p>
      </div>
    </div>
  )
}

export default NabBar
