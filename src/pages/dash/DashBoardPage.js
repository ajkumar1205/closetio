import React from 'react';
import Navbar from './NavBar';
import Home from './Home';
import Closet from './closet/closet';
import "../../assets/dashboard.css";
import { Routes, Route } from 'react-router-dom';
import Lookbook from './lookbook/lookbook.js'

const DashBoardPage = () => {
  return (
    <div className='containers'>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={ <Home/>}/>
          <Route path="/dashboard/closet" element={ <Closet/>}/>
          {/* <Route path="/closet?source=mobile_menu" element={ <Closet/>}/> */}
          <Route path="/dashboard/lookbook" element={ <Lookbook/>}/>
          {/* <Route path="/lookbook?source=mobile_menu" element={ <Lookbook/>}/> */}
        </Routes>
    </div>
  )
}

export default DashBoardPage;
