import React from 'react'
import './List.css'
import Card from '../Card/Card.js'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name : this.props.list.name,
      cards : [],
      isDisabled : false
    }
    this.deleteThisList = this.deleteThisList.bind(this)
    this.addNewCard = this.addNewCard.bind(this)
    this.toggleDisable = this.toggleDisable.bind(this)
    this.editing = this.editing.bind(this)
    this.finishEditing = this.finishEditing.bind(this)
  }

  deleteThisList() {
    this.props.updateList(this.props.list)
  }

  toggleDisable() {
    console.log('In the toggle disp')
    this.setState({
      isDisabled : !this.state.isDisabled
    })
    console.log(this.state.isDisabled)
  }

  editing(event) {
    this.setState({
      name : event.target.value
    })
  }

  finishEditing(event) {
    if(event.which === 13) {
      this.toggleDisable()
    }
  }

  addNewCard() {

  }

  render() {
    const allCards = this.state.cards.map( (card) => {
      return <Card/>
    })
    return (
      <div className="listContainer">
        <div className="deleteThisList" title="Delete this entire List" onClick={this.deleteThisList}>&times;</div>
        <div className="listNameHolder">
        <input value={this.state.name} disabled={!this.state.isDisabled} onChange={this.editing} onKeyUp={this.finishEditing}/>
        <button className="toggleDisableButton" title="EDIT List Name" onClick={this.toggleDisable}>&#x270E;</button>
        </div>
        <div className="cardComponents">
          {allCards}
        </div>
        <div className="addNewCard" title="Add a Card to this List" onClick={this.addNewCard}>&#43;</div>
      </div>
    )
  }
}

export default List
