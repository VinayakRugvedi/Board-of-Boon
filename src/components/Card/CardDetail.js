import React from 'react'
import './CardDetail.css'

class CardDetail extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="cardModalWindowBG">
        <div className="cardModalWindow">
          <div className="closeIt">&times;</div>
          <div className="cardNameContainer">
            <p>Name</p>
            <input/>
            <button>S</button>
          </div>
          <div className="cardDescriptionContainer">
            <p>Description</p>
            <textarea></textarea>
            <button>S</button>
          </div>
          <div className="cardLabelContainer">
            <p>Label</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CardDetail
