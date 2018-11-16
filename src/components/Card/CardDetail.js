import React from 'react'
import './CardDetail.css'

class CardDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description : this.props.card.description,
      label : this.props.card.label,
      dueDate : this.props.card.dueDate,
      priority : this.props.card.priority
    }
    this.toggleDisplay = this.toggleDisplay.bind(this)
    this.finishEditing = this.finishEditing.bind(this)
    this.editingName = this.editingName.bind(this)
    this.editingDescription = this.editingDescription.bind(this)
    this.editingDueDate = this.editingDueDate.bind(this)
    this.setPriority = this.setPriority.bind(this)
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

  setLabelColor(color, event) {
    this.setState({
      label : color
    })
  }

  setPriority(event) {
    this.setState({
      priority : event.target.textContent
    })
  }

  finishEditing(event) {
    let cardCopy
      cardCopy = this.props.card
      cardCopy.name = this.props.card.name
      cardCopy.description = this.state.description
      cardCopy.label = this.state.label
      cardCopy.dueDate = this.state.dueDate
      cardCopy.priority = this.state.priority
      this.props.updateCard(cardCopy, false)
      this.props.toggleHidden()
  }

  render() {
    const priorityButtons = [1,2,3,4,5,6,7,8,9,10].map( (value, index) => {
      return <button key={index} onClick={this.setPriority} style={ {backgroundColor :
        Number(this.state.priority) === value
        ? "#0099ff"
        : ''}}> {value} </button>
    })
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
              <button className="whiteLabel" onClick={ (e) => this.setLabelColor('white', e)}></button>
              <button className="greenLabel" onClick={ (e) => this.setLabelColor('green', e)}></button>
              <button className="redLabel" onClick={ (e) => this.setLabelColor('red', e)}></button>
              <button className="blueLabel" onClick={ (e) => this.setLabelColor('blue', e)}></button>
              <button className="yellowLabel" onClick={ (e) => this.setLabelColor('yellow', e)}></button>
            </div>
            <div className="priorityContainer">
              <p>Priority</p>
              <div className="priorityItemContainer">
                { priorityButtons }
              </div>
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
