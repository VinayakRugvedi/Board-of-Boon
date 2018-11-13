import React from 'react'
import './CardDetail.css'

class CardDetail extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="cardModalWindowBG">
        <div className="cardModalWindow">
          <div className="closeIt">&times;</div>
        </div>
      </div>
    )
  }
}
export default CardDetail
