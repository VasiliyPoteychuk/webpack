import React, {Fragment, useEffect, useState} from 'react';
import CreateLists from './lists';
import ChangePage from './pages';
import './App.css'

export default function App (props){
  const [users, setUsers] = useState([])
  const [limit, setLimit] = useState(20)
  const [skip, setSkip] = useState(0)
  const [total, setTotal] = useState(0)
  useEffect(()=>{
    async function getUsers(){
    const response = await fetch (`http://dummyjson.com/users/?limit=${limit}&skip=${skip}`)
    const json = await response.json()
    
    setUsers(json.users)
    setTotal(json.total)
    if(total-limit<skip){
      setSkip(total-limit)
    }
    if(skip<0){
      setSkip(0)
    }
  }
  getUsers()
  },[limit, skip])
  
  return(
    <Fragment>
      <ChangePage 
      limits={limit}
      totals={total}
      onChangeLimit={(data)=>setLimit(data)}
      onChangePage={(sing)=>setSkip(sing=='+'?+skip+ +limit:sing=='-'?+skip- +limit:'')}
      />
      <CreateLists tableLists={users}/>
    </Fragment>
  )
}