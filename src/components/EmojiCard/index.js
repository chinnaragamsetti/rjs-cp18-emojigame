// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {eachdetails, emojisListprop} = props
  const {id, emojiUrl} = eachdetails

  const shuffleImage = () => {
    shuffledEmojisList(id)
  }
  return (
    <button type="button" onClick={shuffleImage} className="emojicontainer">
      <img src={emojiUrl} alt="emoji" className="emoji" />
    </button>
  )
}

export default EmojiCard
