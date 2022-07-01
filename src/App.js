import React from "react";
import ProjectnavBar from "./projectnavbar";
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Login from "./login";
// import Resetpassword from "./Resetpassword";
import Project from "./projects";


function Home(){
  return(
      // <Router>
      //   <Routes>
      //     <Route exact path='/' element={<Login/>}></Route>
      //     <Route exact path='/login' element={<Login/>}></Route>
      //     <Route exact path='/reset-password/:param' element={<Resetpassword />}></Route>
      //   </Routes>
      // </Router>
      <div>
        
        <ProjectnavBar/>
        <Project/>
      </div>

  )
}

export default Home
