import React from 'react';
import Navbar from './NavBar';
import Home from './Home';
import Closet from './closet/closet';
import "../../assets/dashboard.css";
import { Routes, Route} from 'react-router-dom';
import Lookbook from './lookbook/lookbook.js'

const DashBoardPage = () => {
  return (
    <div className='containers'>
      <Navbar/>
      <Home/>
        
    </div>
  )
}

export default DashBoardPage;
