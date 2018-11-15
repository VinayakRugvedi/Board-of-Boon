import React from 'react'
import './Card.css'
import CardDetail from './CardDetail.js'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name : this.props.card.name,
      isDisabled : false,
      isHidden : 'none'
    }
    this.toggleDisable = this.toggleDisable.bind(this)
    this.editing = this.editing.bind(this)
    this.finishEditing = this.finishEditing.bind(this)
    this.deleteThisCard = this.deleteThisCard.bind(this)
    this.toggleHidden = this.toggleHidden.bind(this)
  }

  deleteThisCard(event) {
    event.stopPropagation()
    this.props.updateCards(this.props.card)
  }

  toggleDisable(event) {
    event.stopPropagation()
    this.setState({
      isDisabled : !this.state.isDisabled
    })
  }

  editing(event) {
    this.setState({
      name : event.target.value
    })
  }

  finishEditing(event) {
    if(event.which === 13) {
      this.setState({
        isDisabled : !this.state.isDisabled
      })
    }
  }

  toggleHidden(event) {
    console.log(event)
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
      <React.Fragment>
      <div className="cardContainer" onClick={this.toggleHidden}>
        <div className="deleteThisCard" title="Delete this Card" onClick={this.deleteThisCard}>&times;</div>
        <div className="cardNameHolder">
          <input placeholder=" &#43; Add Card name" disabled={this.state.isDisabled} onChange={this.editing} onKeyUp={this.finishEditing} value={this.state.name} onClick={ (event) => event.stopPropagation()}/>
          <button className="toggleDisableButtonCard" title="EDIT this Card name" onClick={this.toggleDisable}>&#x270E;</button>
        </div>
        <div className="highlights">
          <div className="labelColor highlights-items" title="Assigned Label Color - Default : White"></div>
          <div className="descriptionIfAny highlights-items" title="This Card has a Description">&#9776;</div>
          <div className="dueDate highlights-items" title="The Card's due Date">Nov 3 2018</div>
          <div className="checklistItems highlights-items" title="Checklist Items">10/10</div>
        </div>
      </div>
      <CardDetail isHidden = {this.state.isHidden} toggleHidden = {this.toggleHidden}/>
      </React.Fragment>
    )
  }
}

export default Card
