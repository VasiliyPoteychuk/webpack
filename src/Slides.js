import {Fragment, useEffect, useState} from 'react';

export default function Slider(props){
  const [ind, setInd] = useState(0)
  
  
  // {props.auto &&props.delay?
  //   setInterval(function(){ind<props.slides.length-1?setInd(ind+1):setInd(0)},props.delay*1000):
  //   setInterval(function(){ind<props.slides.length-1?setInd(ind+1):setInd(0)},5000)
  // }
  
  return(
    
    <Fragment>
      
      <div style={{width:'max-content', display:'flex', flexDirection:'column', justifyContent:'center',position:'relative'}}>
      <img src={props.slides[ind].img} 
      value={props.slides[ind].text}
      />
      <h1 className='imgName' 
        style={{position:'absolute', top:'280px',left:'420px', color:'white'}}
      >{props.slides[ind].text}</h1>
      {props.pags?
        <ul style={{listStyleType:'none', display:'flex', justifyContent:'center'}}>
          {props.slides.map((el, index)=>
          <li 
            style={{border:`1px solid gray`,
              borderRadius:'100%', 
              width:'max-content', 
              backgroundColor:` ${index==ind?`gray`:`lightgray`}`,
              padding:'5px',
              margin:'5px'
            }}
            key={index}
            onClick={()=>setInd(index)}
          >{index+1}/{props.slides.length}</li>
          )}
        </ul>:''
      }
      {props.navs?
      <div>
        <button onClick={()=> 
          ind > 0? setInd(ind-1):
          ind==0 && props.loop? setInd(props.slides.length-1):
          setInd(0)}
          
        >previous</button>
        <button onClick={()=> 
          ind<props.slides.length-1? setInd(ind+1):
          ind == props.slides.length-1 && props.loop? setInd(0):
          setInd(props.slides.length-1)}
          >next</button>
      </div>
      :''
      }
    </div>
    </Fragment>
    
  )
}