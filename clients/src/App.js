import React,{useState, useEffect, createContext} from "react";

import {HashRouter, Route, Routes } from "react-router-dom";

import AddUser from "./Components/AddUser";
import Header from "./Components/Header";
import LoginUser from "./Components/LoginUser";


// import AddRecipe from "../Components/AddRecipe";

// import Home from "./Components/Home";
// import Search from "./Components/Search";
// import ShowRecipe from "./Components/ShowRecipe";
const userContext = createContext();

function App() {
   // const[start, setStart] = useState("");

   const [recGloablList , setRecGllobalList] = useState([]);
   const [userdata , setUserdata] = useState("");
  //  const location = useLocation();
   
  //  function fetchRecipesGlobally(){
  //   return fetch('https://yummy-recipe-param.onrender.com/recipe').then((res)=>res.json())
  //   .then((data)=>{
  //    // console.log(data);
  //     setRecGllobalList(data);
  //   })
  // }
 

  // useEffect(()=>{
  //   fetchRecipesGlobally();
  // },[]);
  return (
     
    <HashRouter>
    <Routes>

      <Route path="/" element={
        <LoginUser />
      } />
      <Route path="/adduser" element={
         <AddUser />
      } />
       <Route path="/login" element={
        <LoginUser />
      } />
     <Route path="/home" element={
        <>
         <Header/>
         {/* <Home /> */}
        </>
      } />
     {/* 
       <Route path="/addrecipe" element={
        <>
        <Header />
        <AddRecipe />
        </>
      } />
        <Route path="/showrecipe" element={
        <>
        <Header />
        <ShowRecipe/>
        </>
      } />
      <Route path="/search" element={
        <>
        <Header />
          <Search />
        </>
      } /> */}
    </Routes>
    </HashRouter>
   

  );
}

export default App;
export { userContext};