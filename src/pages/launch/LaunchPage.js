import React from 'react';
import img from '../../assets/side_image.png';
import { Routes, Route, Link } from 'react-router-dom';
import LaunchPageButton from '../../components/LaunchPageButton';

import '../../assets/launch.css';
import PageHeader from '../../components/PageHeader';

const LaunchPage = () => {
  return (
    <div className="containers launchPage">
        <div className="content">
            <PageHeader white="Welcome to" gradient="Closet.io!"/>
            <div className="dsbrd">
                <img src={img} className="lc"/>
                <div className="headtg">Your closet in the cloud: Always stylish, Always organized</div> 
                <div className="lk">
                    <LaunchPageButton link="/login" name="Login"/>
                    <LaunchPageButton link="/signup" name="Signup"/>
                    {/* <Link to="/login" ><span className ="hn"><span className ="as">Login</span></span></Link>
                    <Link to="/signup" ><span className ="hn"><span className ="as">Signup</span></span></Link> */}
                </div>
                <div className="lk1">
                    <LaunchPageButton link="/dashboard" name="Explore as Guest" />
                    {/* <Link to="/dashboard"><span className ="hn"><span className ="as">Explore as Guest</span></span></Link> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default LaunchPage;