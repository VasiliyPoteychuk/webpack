import React, {Component} from 'react';
import CreateRectangle from './rectangle';
import './App.css';
//первый вариант
// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       x: 100,
//       y: 100
//     }
//    this.moveRectangle=this.moveRectangle.bind(this) 
//   }

//   moveRectangle(deltaX,deltaY){
    
//     this.setState(state=>({
//       x:state.x+deltaX,
//       y:state.y+deltaY
//     }))
//   }

//   render(){
//     return (
//     <div className="App"
//     style={{
//       position: 'absolute',
//       top: this.state.x,
//       left: this.state.y
//     }}
//     >
//       <CreateRectangle 
//       onMove={this.moveRectangle}/>
//     </div>
//     )
//   }
// }

//второй вариант
class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <CreateRectangle/>
      </div>
    )
  }
}
export default App;