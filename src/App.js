import React, {Fragment, useEffect, useState} from 'react';
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
import Slider from './Slides';
export default function App(props){
  const slides = [
    {
        img: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
        text: 'Caption Text 1'
    },
    {
        img: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
        text: 'Caption Text 2'
    },
    {
        img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
        text: 'Caption Text 3'
    },
];
const [loop,setLoop]=useState(true)//возможность листать слайдер по кругу
const [navs,setNavs]=useState(true)//вывод стрелочек и их отключение
const [pags,setPags]=useState(true)//вывод пагинации и ее отключение
const [auto,setAuto]=useState(true)//слайдер сам переключается если делау не указан раз в 5 секунд
const [mouseHover,setMouseHover]=useState(true)//при наведении на картинку слайд не переключается
const [delay,setDelay]=useState(3)//таймер переключения слайдов

return(
    <Slider
        slides={slides}
        loop={true}
        navs={true}
        pags={true} 
        auto={true} 
        stopMouseHover={true}
        delay={3} 
    />
)
}