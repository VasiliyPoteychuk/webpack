//import React, {Fragment, useEffect, useState} from 'react';
// import CreateLists from './lists';
// import ChangePage from './pages';
 import './App.css'

// export default function App (props){
//   const [users, setUsers] = useState([])
//   const [limit, setLimit] = useState(20)
//   const [skip, setSkip] = useState(0)
//   const [total, setTotal] = useState(0)
//   useEffect(()=>{
//     async function getUsers(){
//     const response = await fetch (`http://dummyjson.com/users/?limit=${limit}&skip=${skip}`)
//     const json = await response.json()
    
//     setUsers(json.users)
//     setTotal(json.total)
//     if(total-limit<skip){
//       setSkip(total-limit)
//     }
//     if(skip<0){
//       setSkip(0)
//     }
//   }
//   getUsers()
//   },[limit, skip])
  
//   return(
//     <Fragment>
//       <ChangePage 
//       limits={limit}
//       totals={total}
//       onChangeLimit={(data)=>setLimit(data)}
//       onChangePage={(sing)=>setSkip(sing=='+'?+skip+ +limit:sing=='-'?+skip- +limit:'')}
//       />
//       <CreateLists tableLists={users}/>
//     </Fragment>
//   )
// }

// import Slider from './Slides';
// export default function App(props){
//   const slides = [
//     {
//         img: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
//         text: 'Caption Text 1'
//     },
//     {
//         img: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
//         text: 'Caption Text 2'
//     },
//     {
//         img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
//         text: 'Caption Text 3'
//     },
// ];
// const [loop,setLoop]=useState(true)//возможность листать слайдер по кругу
// const [navs,setNavs]=useState(true)//вывод стрелочек и их отключение
// const [pags,setPags]=useState(true)//вывод пагинации и ее отключение
// const [auto,setAuto]=useState(true)//слайдер сам переключается если делау не указан раз в 5 секунд
// const [mouseHover,setMouseHover]=useState(true)//при наведении на картинку слайд не переключается
// const [delay,setDelay]=useState(3)//таймер переключения слайдов

// return(
//     <Slider
//         slides={slides}
//         loop={true}
//         navs={true}
//         pags={true} 
//         auto={true} 
//         stopMouseHover={true}
//         delay={3} 
//     />
// )
// }


// Описание: Создаем пустое поле и кнопку для добавления в TODO лист. При нажатии на кнопку добавлем новый элемент задания в общий массив дел. Все задания выводится списком, каждое задание можно перечеркнуть как выполненое или полностью удалить (можно две кнопки вывести)

// После того как сделаем функционал как в примере, добавьте возможность массовых действий (добавляем чекбокс рядом с каждым заданием) и если хоть один элемент выбран, то появляется две кнопки: "Сделать выполненным" и "удалить". Соответсвенно мы можем выбрать как один, так и много чекбоксов и все отмеченные удалить или сделать выполненными.

// Далее добавить кнопку "Выбрать все", при клике на нее мы проставлем на все элементы, что они выбраны

// Добавить кнопку "Очистить выбор" - она снимает все чекбосы (Данныя кнопка становится видна, если хотябы один чекбокс выбран).
// import Notebook from './notebook';
// export default function App(props){


//     return(
//         <div>
//             <Notebook/>
//         </div>
//     )

// }


//to do list products

import { Fragment, useState, useEffect } from 'react';
import ListProducts from './listproducts';
import Cart from './cart';

export default function App (props){
    const [productlist, setProductList] = useState([]);
    const [choosedProducts, setChoosedProducts] = useState([]);

    useEffect(()=> {
        async function getProducts(){
            const responce = await fetch ('https://dummyjson.com/products')
            const json = await responce.json()
            setProductList(json.products)
        }
        getProducts()
    },[])


    function saveChoosedProduct(product){
        
        console.log(product);
        if(choosedProducts.includes(product)){
            console.log();
           
        }else{
            setChoosedProducts([...choosedProducts,{product, count:1}])
        }
    }
    function reduseCount(prod){
        console.log(prod);
        setChoosedProducts(choosedProducts.filter(product => {
            if(product.product===prod.product){
             product.count= product.count-1   
            }
            return product
        }))
    }
    function increaseCount(prod){
        console.log(prod);
        setChoosedProducts(choosedProducts.filter(product => {
            if(product.product===prod.product){
             product.count= product.count+1   
            }
            return product
        }))
    }
    return(
        <div>
            <Cart 
                choosedProducts={choosedProducts}
                onReduseCount={reduseCount}   
                onIncreaseCount={increaseCount}
            />
            <ListProducts
                products={productlist}
                onChooseProduct = {saveChoosedProduct}
            />
        </div>
    )
}