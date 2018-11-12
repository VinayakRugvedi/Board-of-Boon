import React from 'react'
import List from '../List/List.js'
import './Board.css'

class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      listName : ''
    }
  }

  acceptListName(event) {
    if(event.which === 13) {
      this.setState({
        listName : ''
      })
    }
  }

  showName(event) {
    console.log(event)
    this.setState({
      listName : event.target.value
    })
  }

  render() {
    return (
      <div className="boardContainer">
        <input className="addNewList" placeholder=" &#43; Add a New List" value={this.state.listName} onKeyUp={this.acceptListName.bind(this)} onChange={this.showName.bind(this)}/>
        <div className="listComponents">
          <List/>
        </div>
      </div>
    )
  }
}

export default Board
