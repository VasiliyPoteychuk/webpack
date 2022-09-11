import {Component} from 'react'
import MoveRectangle from './move';
//первый вариант
// class CreateRectangle extends Component{
//   constructor(props){
//     super(props)
    
//     this.move=this.move.bind(this)
//   }

//   move(x,y){
//     this.props.onMove(x,y)
    
//   }

//   render(){
//     return(
//       <div className='buildRectangle'>
//         <button onClick={()=> this.move(-10,0)}>up</button>
//         <button onClick={()=> this.move(10,0)}>down</button>
//         <button onClick={()=> this.move(0,-10)}>left</button>
//         <button onClick={()=> this.move(0,10)}>right</button>
//       </div>
//     )
//   }
// } 

//второй вариант
class CreateRectangle extends Component{
  constructor(props){
    super(props)
    this.state={
      x:200,
      y:200
    }
    this.move=this.move.bind(this)
  }

  move(coordinateX,coordineteY){
    if(coordinateX==0 && coordineteY==0){
      this.setState(state=>({
        x: 200,
        y: 200
      }))
    }else{
      this.setState(state=>({
      x: state.x+ coordinateX,
      y: state.y+ coordineteY
    }))
    }
    
  }

  render(){
    return(
      <div 
        className='buildRectangle'
        style={{
          top: this.state.x,
          left: this.state.y
        }}
      >
        <MoveRectangle
          onMove={this.move}
        />
      </div>
    )
  }
}


export default CreateRectangle;