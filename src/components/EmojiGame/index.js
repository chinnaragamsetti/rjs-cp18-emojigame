/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const repeatedlist = []

class EmojiGame extends Component {
  state = {score: 0, topscore: 0, repeatedlists: repeatedlist, repeatedcount: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playedAgain = () => {
    const {score, topscore} = this.state
    if (score > topscore) {
      this.setState({
        score: 0,
        topscore: score,
        repeatedcount: 0,
        repeatedlists: [],
      })
    } else {
      this.setState({
        score: 0,
        topscore,
        repeatedcount: 0,
        repeatedlists: [],
      })
    }
  }

  onclickedImage = id => {
    const {repeatedlists} = this.state

    if (repeatedlists.includes(id)) {
      this.setState(prevState => ({repeatedcount: prevState.repeatedcount + 1}))
      // console.log(true)
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        repeatedlists: [...prevState.repeatedlists, id],
      }))
    }
  }

  display = () => {
    const {score, repeatedcount} = this.state
    const afterShuffeledlist = this.shuffledEmojisList()
    console.log(afterShuffeledlist)
    if (score === 0) {
      return (
        <ul className="emojilist">
          {afterShuffeledlist.map(each => (
            <EmojiCard
              eachdetails={each}
              onclickedImage={this.onclickedImage}
              key={each.id}
            />
          ))}
        </ul>
      )
    }
    return repeatedcount !== 0 || score === 12 ? (
      <WinOrLoseCard playedAgain={this.playedAgain} scoredetails={score} />
    ) : (
      <ul className="emojilist">
        {afterShuffeledlist.map(each => (
          <EmojiCard
            eachdetails={each}
            onclickedImage={this.onclickedImage}
            key={each.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topscore, repeatedcount} = this.state
    return (
      <div className="maincontainer">
        <NavBar
          scoreDetails={score}
          topScore={topscore}
          repeatedCount={repeatedcount}
        />
        <div className="bottomcontainer">{this.display()}</div>
      </div>
    )
  }
}

export default EmojiGame
