import React from 'react'
import './Card.css'
import CardDetail from './CardDetail.js'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled : false,
      isHidden : 'none'
    }
    this.toggleDisable = this.toggleDisable.bind(this)
    this.editing = this.editing.bind(this)
    this.finishEditing = this.finishEditing.bind(this)
    this.deleteThisCard = this.deleteThisCard.bind(this)
    this.toggleHidden = this.toggleHidden.bind(this)
    this.drag = this.drag.bind(this)
  }

  drag = (e) => {
    e.dataTransfer.setData("text", JSON.stringify(this.props.card))
    console.log(e.dataTransfer.getData("text"), 'before sending')
  }

  deleteThisCard(event) {
    event.stopPropagation()
    this.props.updateCard(this.props.card)
  }

  toggleDisable(event) {
    event.stopPropagation()
    this.setState({
      isDisabled : !this.state.isDisabled
    })
  }

  editing(event) {
    let cardCopy = this.props.card
    cardCopy.name = event.target.value
    this.props.updateCard(cardCopy, false)
  }

  finishEditing(event) {
    if(event.which === 13) {
      this.setState({
        isDisabled : !this.state.isDisabled
      })
    }
  }

  toggleHidden(event) {
    this.state.isHidden
    ? this.setState({
      isHidden : ''
    })
    : this.setState({
      isHidden : 'none'
    })
  }

  render() {
    return (
      <div className="theCompleteCard" id={this.props.card.cardId} draggable="true" onDragStart={ (e) => this.drag(e)} onDragEnd={this.deleteThisCard}>
      <div className="cardContainer" onClick={this.toggleHidden}>
        <div className="deleteThisCard" title="Delete this Card" onClick={this.deleteThisCard}>&times;</div>
        <div className="cardNameHolder">
          <input placeholder=" &#43; Add Card name" disabled={this.state.isDisabled} onChange={this.editing} onKeyUp={this.finishEditing} value={this.props.card.name} onClick={ (event) => event.stopPropagation()}/>
          <button className="toggleDisableButtonCard" title="EDIT this Card name" onClick={this.toggleDisable}>&#x270E;</button>
        </div>
        <div className="highlights">
          <div className="labelColor" title="Assigned Label Color" style={ { backgroundColor : this.props.card.label } }>
          </div>
          {
            this.props.card.description.length > 0
            ? <div className="descriptionIfAny" title="This Card has a Description">&#9776;</div>
            : ''
          }
          {
            this.props.card.dueDate.length > 0
            ? <div className="dueDate" title="The Card's due Date">
                { this.props.card.dueDate }
              </div>
            : ''
          }
          <div className="priorityItem" title="Assigned Priority">
          { this.props.card.priority }/10
          </div>
        </div>
      </div>
      <CardDetail isHidden = {this.state.isHidden} toggleHidden = {this.toggleHidden} card={this.props.card} updateCard={this.props.updateCard}/>
      </div>
    )
  }
}

export default Card
