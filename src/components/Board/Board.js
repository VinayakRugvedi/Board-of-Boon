import React from 'react'
import List from '../List/List.js'
import './Board.css'

class Board extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="boardContainer">
      <List/>
      <List/>
      </div>
    )
  }
}

export default Board
