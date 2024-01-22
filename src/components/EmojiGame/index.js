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
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

// const topScore = 0 repeatedlists: repeatedlist
const repeatedlist = []

class EmojiGame extends Component {
  state = {score: 0, topscore: 0, repeatedlists: repeatedlist, repeatedcount: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playedAgain = () => {
    this.setState({score: 0})
    // topScore = score
  }

  onclickedImage = id => {
    const {repeatedlists} = this.state
    if (repeatedlists.includes(id)) {
      this.setState(prevState => ({repeatedcount: prevState.repeatedcount + 1}))
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,repeatedlists:[...prevState.repeatedlists,id]
      }))
    }
  }


  display = () => {
    const {score, repeatedcount} = this.state
    const afterShuffeledlist = this.shuffledEmojisList()
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
    return {
      if (repeatedcount != 0) {
        return (
          <WinOrLoseCard playedAgain={this.playedAgain} scoredetails={score} />
          this.setState({topscore:score})
        )
        
      }
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
  }

  render() {
    const {score, topscore} = this.state

    return (
      <div className="maincontainer">
        <NavBar scoreDetails={score} topscoreDetails={topscore} />
        <div className="bottomcontainer">{this.display()}</div>
      </div>
    )
  }
}

export default EmojiGame
