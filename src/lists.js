import React, {Fragment, useState} from "react";

export default function CreateLists (props){
  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function changeData(us){
    setUser(us);
    setIsLoading(true)
  }
  
  return(
    <Fragment>
      {isLoading ? 
      <div className="viewData">
        <div>
          <img src={user.image}/>
        </div>
        <div>
          <ul className="viewDataUl">
            <li>id:{user.id}</li>
            <li>name:{user.firstName}</li>
            <li>lastName:{user.lastName}</li>
            <li>age:{user.age}</li>
          </ul>
        </div>
      </div> :
      <h1>choose user</h1> }
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {props.tableLists.map(us=> 
            <tr 
              className={us==user? 'checked':''}
              onClick={()=> changeData(us)}
              key={us.id}
            >
              <td>{us.id}</td>
              <td>{us.firstName}</td>
              <td>{us.lastName}</td>
              <td>{us.age}</td>
            </tr>
          )}
        </tbody>
      </table>
    </Fragment>
    
  )
}