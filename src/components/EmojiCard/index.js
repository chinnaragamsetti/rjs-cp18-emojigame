// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {eachdetails, onclickedImage} = props
  const {id, emojiUrl} = eachdetails

  const onclickImage = () => {
    onclickedImage(id)
  }
  return (
    <li className="list">
      <button type="button" onClick={onclickImage} className="emojicontainer">
        <img src={emojiUrl} alt="emoji" className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
