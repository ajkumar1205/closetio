import React from 'react';
import Navbar from './NavBar';
import Home from './Home';
import "../../assets/dashboard.css";

const DashBoardPage = () => {
  return (
    <div className='containers'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default DashBoardPage;
