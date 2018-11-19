import React from 'react'
import List from '../List/List.js'
import './Board.css'
import shortid from 'shortid'

class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      listName : '',
      lists : []
    }
    this.showListName = this.showListName.bind(this)
    this.acceptListName = this.acceptListName.bind(this)
    this.updateList = this.updateList.bind(this)
  }

  acceptListName (event) {
    if(event.which === 13) {
      let listsCopy = this.state.lists
      listsCopy.push({name: this.state.listName, listId: shortid.generate()})
      this.setState({
        listName : '',
        lists : listsCopy
      })
    }
  }

  showListName (event) {
    this.setState({
      listName : event.target.value
    })
  }

  updateList (list, toRemove = true) {
    let listsCopy = this.state.lists
    for( let item of listsCopy) {
      if(item.listId === list.listId) {
        if(toRemove)
        listsCopy.splice(listsCopy.indexOf(item), 1)
        else item = list
        break
      }
    }
    this.setState({
      lists : listsCopy
    })
  }

  render () {
    const allLists = this.state.lists.map( (list) => {
      return <List key={list.listId} list={list} updateList={this.updateList}/>
    })

    return (
      <div className="boardContainer">
        <input className="addNewList" placeholder=" &#43; Add a New List" value={this.state.listName} onKeyUp={this.acceptListName} onChange={this.showListName}/>
        <div className="listComponents">
          {allLists}
        </div>
      </div>
    )
  }
}

export default Board
