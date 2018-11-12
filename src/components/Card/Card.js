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
        <div className="highlights">
          <div className="labelColor highlights-items" title="Assigned Label Color">q</div>
          <div className="descriptionIfAny highlights-items" title="This Card has a Description">w</div>
          <div className="dueDate highlights-items" title="The Card's due Date">e</div>
          <div className="checklistItems highlights-items" title="Checklist Items">r</div>
        </div>
      </div>
    )
  }
}

export default Card
