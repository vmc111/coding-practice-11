import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {feedBack: null}

  renderFeedbackMessage = event => {
    this.setState({feedBack: event.target.alt})
  }

  render() {
    const {resources} = this.props
    const {emojis} = resources
    const {feedBack} = this.state

    let toRender

    const renderEmojis = emojis.map(eachResource => (
      <li key={eachResource.id} className="emoji-flex">
        <img
          onClick={this.renderFeedbackMessage}
          className="emoji"
          src={eachResource.imageUrl}
          id={eachResource.id}
          alt={eachResource.name}
        />
        <p>{eachResource.name}</p>
      </li>
    ))

    const mainScreen = (
      <div className="card-main">
        <h1>How satisfied are you with our customer support performance?</h1>
        <ul className="emojis-container">{renderEmojis}</ul>
      </div>
    )

    const thankYouScreen = (
      <div className="card-main">
        <img src={resources.loveEmojiUrl} alt="love emoji" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )

    if (feedBack === null) {
      toRender = mainScreen
    } else {
      toRender = thankYouScreen
    }

    return <div className="main-container">{toRender}</div>
  }
}

export default Feedback
