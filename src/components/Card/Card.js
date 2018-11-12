import React from 'react'
import './Card.css'

class Card extends React.Component {
  constructor() {
    super()
  }

  deleteThisCard() {
    
  }

  render() {
    return (
      <div className="cardContainer">
        <div className="deleteThisCard" title="Delete this Card" onClick={this.deleteThisCard}>&times;</div>
      </div>
    )
  }
}

export default Card
