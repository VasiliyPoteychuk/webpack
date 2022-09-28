import  { useState, useEffect, Fragment } from "react";

export default function Notebook(props){
  const [tasks, setTasks] = useState([]);
  
  const [task, setTask] = useState('')
  const [choose, setChoose]= useState(false)

  
  //сохраняет текст при вводе
  function saveTasks(e){
    e.preventDefault()

    setTasks([...tasks, task])
    setTask('')
  }
  //удаляет задачу
  function deleteTask(el){
    setTasks(tasks.filter(elem=> elem!=el))
  }
  //перечеркивает выполненую задачу по клику на неё
  function checkTask(e){
    e.target.classList.toggle('done')
  }
  //перечеркивает выполненую задачу по клику на кнопку
  // function changeStyle(e){
  //     e.target.parentElement.classList.toggle('active')
  //     console.log(e.target.parentElement);
  // }
  function baba(e){
    let etcN = e.target.className
    if(etcN.includes('active')){setChoose(true)}
    if(!etcN.includes('active')){setChoose(false)}
    
    console.log(etcN, choose);
  }  
  return(
    <Fragment>
      <form onSubmit={(e)=>saveTasks(e)}>
        <textarea value={task} onChange={(e)=> setTask(e.target.value)}/>
        <input type='submit'/>
      </form>
      
      {choose?
        <div>
          <button>1</button>
          <button>2</button>
        </div>:"" 
        
      }
      <ul className="tasksList" >
        {tasks.map((el, index) => 
          <li className="lists"
            key={el+index}
            onClick={(e)=>checkTask(e)}
          >
            <input type='checkbox' className="listInput" onChange={(e)=> baba(e)}/>
            {el} 
            <button onClick={() => deleteTask(el)}>delete</button>  
        </li>
        )}
      </ul>
    </Fragment>
  )
}