import React from 'react';
import img from '../../assets/side_image.png';
import { Routes, Route, Link } from 'react-router-dom';

import '../../assets/launch.css';

const LaunchPage = () => {
  return (
    <div class="containers">
        <div class="content">
            <div class="head">Welcome to <span class ="hn"><span class ="as">Closet.io</span></span> !</div>
            <div class="dsbrd">
                <img src={img} class="lc"/>
                <div class="headtg">Your closet in the cloud: Always stylish, Always organized</div> 
                <div class="lk">
                    <Link to="/login" ><span class ="hn"><span class ="as">Login</span></span></Link>
                    <Link to="/signup" ><span class ="hn"><span class ="as">Signup</span></span></Link>
                </div>
                <div class="lk1">
                    <Link to="/dashboard"><span class ="hn"><span class ="as">Explore as Guest</span></span></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LaunchPage;