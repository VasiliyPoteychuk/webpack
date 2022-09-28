import { useState } from "react";

export default function ListProducts(props){

  function choseProduct(product){
    props.onChooseProduct(product)
  }
  return(
    <div>
      <ul className="listProducts">
        {props.products.map(product=>
          <li
            className="list"
            key={product.thumbnail}
          >
            <h2>{product.brand}</h2>
            <h3>category:{product.category}</h3>
            <img src={product.images[0]}/>
            <span>price:{product.price}</span>
            <span>rating:{product.rating}</span>
            <p>{product.description}</p>
            <button onClick={(e)=>choseProduct(product)}>buy</button>
          </li>
        )}
      </ul>
    </div>
  )
}