// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedback: true,
  }

  onClickEmoji = () => {
    this.setState(prevState => ({isFeedback: !prevState}))
  }

  emojisCard = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="emoji-card">
        <h1 className="heading">
          How Satisfied are you with our customer support performance
        </h1>
        <ul className="emoji-container">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                onClick={this.onClickEmoji}
                className="button"
                type="button"
              >
                <img
                  className="emoji-style"
                  src={emoji.imageUrl}
                  alt={emoji.name}
                />
                <p className="emoji-name">{emoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  responseCard = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="emoji-card">
        <img className="emoji-style" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="heading">Thank You!</h1>
        <p className="emoji-name">
          We Will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state
    return (
      <div className="bg-container">
        {isFeedback ? this.emojisCard() : this.responseCard()}
      </div>
    )
  }
}
export default Feedback
