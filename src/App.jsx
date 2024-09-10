import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {Mainheading,SecondaryHeading} from './headings/heading.jsx'
import {  CustomButton } from "./button/button.jsx";
import { CustomImage } from "./image/img.jsx";
import {Data} from "./da/data.js"

import { Dataaa } from './fake api/p.jsx'
import { DisplayAll } from './fake api/fakeapi.jsx'
import { BackgroundImage } from './conditional/vidya.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import Basic from './ca/card.jsx' 
import { emplyeeDetails } from './da/empl.js'
import { Firstcomponent } from './ca/first.jsx'
import CustomToast from './toast/toast.jsx'
import products from './fakeapii/fake.jsx'

import {Unlist,Olist} from './components/list.jsx'
import YoutubeButton from './class/youtube.jsx'
import  Counter from './class/count.jsx'
import CardTask from './cardtask/addcard.jsx'
import BulbTask from './bulbtask/bulb.jsx'
import FakeapiProducts from './fakeapii/fake.jsx'
import DisplayProducts from './filter/filter.jsx'
import Count from './hooks/count.jsx'
import { Todos } from './hooks/todo.jsx'
import Task from './classs/task.jsx'
import Table from './classs/task1.jsx'
import FakeProducts from './project/project1.jsx'
import UncontrolledComponent from './user/user.jsx'
import UseRef from './useref/useref.jsx'
import Controlled from './controlled/controlled.jsx'
import NaviBar from './navigation/navigation.jsx'
import Tablee from './model/form.jsx'
import Tableee from './model/ex.jsx'
import Apple from './forms/form.jsx'
import ProductTable from './forms/f1.jsx'
import TableC from './task/task.jsx'
import ReduceExamle from './hooks/usereduce.jsx'
import UserForm from './hooks/useState/useState.jsx'
import TodoList from './hooks/useState/vidya.jsx'

function App() {
  const [count, setCount] = useState(0)
  // const imageList=[
  //   {
  //     name:'vidya',
  //     height:50,
  //     src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

    
  //   width:50,
  //   },
  //   {
  //     name:'vidya',
  //     height:150,
      
  //   width:100,
     
  //     src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  //   },
  //   {
  //     name:'vidya',
  //     height:200,
      
  //   width:100,
     
  //     src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  //   },
  // ]
// 
 return(
  <>
  {/* {
    Data.map(eachreciepe=>{
      return(
        <div>
          <Mainheading heading={eachreciepe.name}/>
          <CustomImage vidya={eachreciepe.image}/>
          <SecondaryHeading sec={"steps for incridesns"}/>
          <Unlist list={eachreciepe.ingredients}/>
          <SecondaryHeading sec={"steps for instructions"}/>
          <Unlist list={eachreciepe.instructions}/>

        </div>
      )
 
    })
  } */}
  
{/* <Unlist list='vidya'/>
     <Unlist list='veg'/>
     <Unlist list='fff'/>

<Unlist>
  <Table/>
</Unlist> */}
{/* <BackgroundImage text='winter' /> */}
{/* <Dataaa></Dataaa> */}
{/* <Displayall></Displayall> */}
{/* {
  emplyeeDetails.map(each=>{
    return(
      <>
<Basic title={each.name} text={each.role}/>
      </>
    )
  })
} */}

{/* <Firstcomponent/> */}
{/* <YoutubeButton/> */}

{/* <CardTask/> */}
{/* <DisplayAll/> */}
{/* <BulbTask/> */}
{/* <FakeapiProducts/> */}
{/* <BulbTask/> */}
{/* <DisplayProducts/> */}
{/* <Count/> */}
{/* <Todos/> */}
{/* <Task/> */}
{/* <Even/> */}
{/* <ButtonList/> */}
{/* <Todos/> */}
<Table/>
{/* <FakeapiProducts/> */}
{/* <FakeProducts/> */}
{/* <UncontrolledComponent/> */}
{/* <UseRef/> */}
{/* <Controlled/> */}
{/* <NaviBar/> */}
{/* <Tablee/> */}
{/* <Tableee/> */}
{/* <Apple/> */}
{/* <ProductTable/> */}
{/* <TableC/> */}
{/* <ReduceExamle/> */}
{/* <UserForm/> */}
{/* <TodoList/> */}
  </>
  
 )
   

}


export default App
