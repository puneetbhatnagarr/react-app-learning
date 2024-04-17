import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Classcom from "./Component/Classcom";
import State from "./Component/State";
import Hideshow from "./Component/Hideshow";
import StateOne from "./Component/StateOne";
import MyForm from "./Component/MyForm";
import Condition from "./Component/Condition";
import BasicFormValidation from "./Component/BasicFormValidation";
import Pagenotfound from "./Component/Pagenotfound";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Lifecycle from "./Component/Lifecycle";
import Rendermethod from "./Component/Rendermethod";
import { createContext, useState } from "react";
import Componentdidmount from "./Component/Componentdidmount";
import Shouldcomponent from "./Component/Shouldcomponentupdate";
import Hooks from "./Component/Hooks/Hooks";
import UseState from "./Component/Hooks/UseState";
import UseEffect from "./Component/Hooks/UseEffect";
import Handlearraylistmap from "./Component/Hooks/Handlearraylistmap";
import Nested_list from "./Component/Hooks/Nested_list";
import Reuse_componentInLoop from "./Component/Hooks/Reuse_componentInLoop";
import Send_child_datatoparent from "./Component/Hooks/Send_child_datatoparent";
import REF from "./Component/Hooks/REF";
import Useref from "./Component/Hooks/Useref";
import UseEffect2 from "./Component/Hooks/UseEffect2";
import ArrayList_with_mapFunction from "./Component/Hooks/ArrayList_with_mapFunction";
import Get_api_byJS from "./Component/Hooks/Get_api_byJS";
import Usecontext from "./Component/Hooks/Usecontext";
import ChildA from "./Component/Hooks/ChildA";
import ChildB from "./Component/Hooks/ChildB";
import ChildC from "./Component/Hooks/ChildC";
import Practice_Demo from "./Component/Practice_Demo";
import variable_update from './Component/variable_update';
import Practice_Demo_remove from './Component/Practice_Demo_remove';
const data = createContext()

function App() {
  // const name = "puneet"

  // const [title,setName]=useState('rama');
// reuse component
// const user=[
//   {
//     name:"anil",email:"ram@gmail.com",phone:34455
//   },
//   {
//     name:"anil",email:"ram@gmail.com",phone:34455
//   },
//   {
//     name:"anil",email:"ram@gmail.com",phone:34455
//   }
//  ]
// child data to parent
// function parentAlert(data){
//   // console.log(data)
//   alert(data.name)
// }
  return (
    <>
    {/* <Practice_Demo /> */}
    {/* <Practice_Demo_update /> */}
    <Practice_Demo_remove />
  {/* <variable_update /> */}
     {/* { <UseEffect2 />} */}
      
        {/* <Header /> */}
        {/* <Routes>
        <Route path='' element={<Home />}></Route>
        <Route path='/Myform' element={<MyForm />}></Route>


        </Routes> */}
       {/* <Lifecycle /> */}
       {/* <Rendermethod title={title}/> */}
       {/* <button onClick={()=>setName('Rahul')}>update render</button> */}
       {/* <Componentdidmount /> */}
            {/* <Shouldcomponent /> */}

            {/* <Classcom />

      <State /> */}
      {/* <StateOne />
      <Hideshow /> */}
{/* <Hooks />
<UseState /> */}
{/* <UseEffect /> */}
{/* <ArrayList_with_mapFunction/> */}
{/* <data.Provider value={name}><ChildA /></data.Provider> */}
{/* <Get_api_byJS/> */}
{/* <Usecontext/> */}
{/* 
<ChildB/>
<ChildC/> */}
{/* <Handlearraylistmap /> */}
{/* <Nested_list /> */}
{/* <h1>reuse component based list </h1>  */}
{/* {
  user.map((data)=>
   
    <Reuse_componentInLoop item={data} />
  )
} */}
{/* <Send_child_datatoparent alert = {parentAlert} /> */}
{/* <REF /> */}
{/* { <Useref />} */}
      {/* <Condition /> */}
      {/* <BasicFormValidation /> */}
      
    </>
  );
}

export default App;
export {data}
