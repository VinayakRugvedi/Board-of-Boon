import React from 'react'
import './Card.css'
import CardDetail from './CardDetail.js'

class Card extends React.Component {
  constructor() {
    super()
  }

  deleteThisCard() {

  }

  render() {
    return (
      <React.Fragment>
      <div className="cardContainer">
        <div className="deleteThisCard" title="Delete this Card" onClick={this.deleteThisCard}>&times;</div>
        <div className="cardNameHolder">
          <input placeholder=" &#43; Add Card name"/>
          <button className="toggleDisableButtonCard" title="EDIT this Card name">&#x270E;</button>
        </div>
        <div className="highlights">
          <div className="labelColor highlights-items" title="Assigned Label Color - Default : Green"></div>
          <div className="descriptionIfAny highlights-items" title="This Card has a Description">&#9776;</div>
          <div className="dueDate highlights-items" title="The Card's due Date">Nov 3 2018</div>
          <div className="checklistItems highlights-items" title="Checklist Items">10/10</div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default Card
