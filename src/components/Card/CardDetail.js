import React from 'react'
import './CardDetail.css'

class CardDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description : this.props.card.description,
      label : this.props.card.label,
      dueDate : this.props.card.dueDate
    }
    this.toggleDisplay = this.toggleDisplay.bind(this)
    this.finishEditing = this.finishEditing.bind(this)
    this.editingName = this.editingName.bind(this)
    this.editingDescription = this.editingDescription.bind(this)
    this.editingDueDate = this.editingDueDate.bind(this)
  }

  toggleDisplay() {
    this.props.toggleHidden()
  }

  editingName(event) {
    let cardCopy
    cardCopy = this.props.card
    cardCopy.name = event.target.value
    this.props.updateCard(cardCopy, false)
  }

  editingDescription(event) {
    this.setState({
      description : event.target.value
    })
  }

  editingDueDate(event) {
    this.setState({
      dueDate : event.target.value
    })
  }

  finishEditing(event) {
    let cardCopy
      cardCopy = this.props.card
      cardCopy.name = this.props.card.name
      cardCopy.description = this.state.description
      cardCopy.label = this.state.label
      cardCopy.dueDate = this.state.dueDate
      this.props.updateCard(cardCopy, false)
      this.props.toggleHidden()
  }

  render() {
    return (
      <div className="cardModalWindowBG" style={{display : this.props.isHidden}}>
        <div className="cardModalWindow">
          <div className="closeIt" onClick={this.toggleDisplay}>&times;</div>
          <div className="contentContainer">
            <div className="cardNameContainer">
              <p>Name</p>
              <input value={this.props.card.name} onChange={this.editingName}/>
            </div>
            <div className="cardDescriptionContainer">
              <p>Description</p>
              <textarea value={this.state.description} onChange={this.editingDescription}></textarea>
            </div>
            <div className="dueDateContainer">
              <p>Due-Date</p>
              <input value={this.state.dueDate} onChange={this.editingDueDate}/>
            </div>
            <div className="cardLabelContainer">
              <p>Label</p>
              <span className="whiteLabel"></span>
              <span className="greenLabel"></span>
              <span className="redLabel"></span>
              <span className="blueLabel"></span>
              <span className="yellowLabel"></span>
            </div>
          </div>
          <div className="saveChanges">
            <button title="Save all the changes made to this card" onClick={this.finishEditing}>SAVE</button>
          </div>
        </div>
      </div>
    )
  }
}
export default CardDetail
