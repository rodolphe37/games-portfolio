import React from 'react'
import './ScoreBoard.css'

class ScoreBoard extends React.Component {


  render() {
    return (
        <div className='flexo'>
          <p className='text'>Correspondances:</p>
          <p className='text'>{this.props.matchesComplete}</p><p className='text'>/</p>{this.props.level === 'easy' ? <p className='text'>8</p> : <p className='text'>16</p>}
        </div>
    )
  }
}


export default ScoreBoard
