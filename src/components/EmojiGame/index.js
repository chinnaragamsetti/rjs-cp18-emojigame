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

const topScore=0
class EmojiGame extends Component {
  state = {score: 0, topscore: 0, unrepeatedList: []}

   let display=<ul className="emojilist">
            {shuffledEmojisList.map(each => (
              <EmojiCard
                eachdetails={each}
                shuffledEmojisList={this.shuffledEmojisList}
                key={each.id}
              />
            ))}
          </ul>

    playedAgain=()=>{
        display=<ul className="emojilist">
            {shuffledEmojisList.map(each => (
              <EmojiCard
                eachdetails={each}
                shuffledEmojisList={this.shuffledEmojisList}
                key={each.id}
              />
            ))}
          </ul>
    }
   shuffledEmojisList = (id) => {
       const {score,topscore}=this.state
      if(unrepeatedList.includes(id)){
          display=<WinOrLoseCard playedAgain={playedAgain} scoredetails={score}/>
          this.setState({score:0,topscore:score})
          
      }
      else{
          display=<ul className="emojilist">
            {shuffledEmojisList.map(each => (
              <EmojiCard
                eachdetails={each}
                shuffledEmojisList={this.shuffledEmojisList}
                key={each.id}
              />
            ))}
          </ul>
          this.setState(prevState=>({score:prevState.score+1}))
      }
    }

  render() {
    // const {emojisList} = this.props
    const {score, topscore} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    return (
      <div className="maincontainer">
        <NavBar scoredetails={score} topscoredetails={topscore} />
        <div className="bottomcontainer">
        {display}
          
        </div>
      </div>
    )
  }
}

export default EmojiGame
