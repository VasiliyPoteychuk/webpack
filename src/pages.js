import React, {Fragment, useState} from "react";

export default function ChangePage(props){
  const [page, setPage] = useState('1')
  const [limit, setLimit] = useState('20')

  function changeLimit(data){
    setLimit(data)
     props.onChangeLimit(data)
  }
  function changePage(sing){
    props.onChangePage(sing)
  }
  return(
    <Fragment>
      <button
        onClick={() => changePage('-')}
      >previous page</button>
      <input
        type='number' 
        value={limit}
        onChange={(event) => changeLimit(event.target.value)}
       />
      <button
        onClick={() => changePage('+')}
      >next page</button>
    </Fragment>
    )
}