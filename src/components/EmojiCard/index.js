// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {eachdetails, onclickedImage} = props
  const {id, emojiUrl, emojiName} = eachdetails

  const onclickImage = () => {
    onclickedImage(id)
  }
  return (
    <li className="emojicontainer">
      <button type="button" onClick={onclickImage} className="emoji">
        <img src={emojiUrl} alt={emojiName} className="image" />
      </button>
    </li>
  )
}

export default EmojiCard
