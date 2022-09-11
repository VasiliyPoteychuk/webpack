import React from 'react'
import CreateRectangle from './rectangle';
//второй вариант
export default class MoveRectangle extends React.Component{
  constructor(props){
    super(props)
    this.move=this.move.bind(this)
  }

   move(x,y){
    this.props.onMove(x,y)
   }
  
  render(){
    return(
      <div className='moveRectangle'>
        <button onClick={()=>this.move(-30,0)} className='upMoveRectangle'>up</button>
        <button onClick={()=>this.move(30,0)} className='downMoveRectangle'>down</button>
        <button onClick={()=>this.move(0,0)} className='returnMoveRectangle'>return</button>
        <button onClick={()=>this.move(0,-30)} className='leftMoveRectangle'>left</button>
        <button onClick={()=>this.move(0,30)} className='rightMoveRectangle'>right</button>
      </div>
    )
  }
  
}