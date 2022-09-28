import { Fragment, useState } from "react";

export default function Cart(props){

function reduseCount(prod){
  props.onReduseCount(prod)
}
function increaseCount(prod){
  props.onIncreaseCount(prod)
}
  return(
   
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>image</th>
          <th>count</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {props.choosedProducts.map(prod=> 
          <tr
          className="cartList"
            key={prod.product.id}
          >
            <td>{prod.product.title}</td>
            <td><img src={prod.product.images[0]}/></td>
            <td>
              <button onClick={(e)=> reduseCount(prod)}>-</button>
              {prod.count}
              <button onClick={(e)=> increaseCount(prod)}>+</button>
            </td>
            <td>{prod.product.price}</td>
          </tr>
        )}
      </tbody>
      
    </table>
    
    
  )
}