import React from 'react'
import Navbar from '../NavBar'
import PageHeader from '../../../components/PageHeader'
import './about.css'
import AboutCard from './aboutCard'

const About = () => {
  return (
    <div className='containers'>
      <Navbar/>
      <div className='content'>
        <PageHeader white="About" gradient="Closet.io"/>
        <div className='great'>
            <div className='cgpa'>
                <div className='w1'>The "Virtual Wardrobe App" is a web-based platform that helps users manage their wardrobe and create outfits virtually. The platform will allow users to upload images of their clothing items and create virtual outfits for different occasions, while also providing suggestions for new items to add to their wardrobe based on their personal style and preferences.</div>
                <br/>
                <h2>Features:</h2>
                <div className='alpha'>
                    <AboutCard cardHeading="Closet Organization" cardImageSource="http://127.0.0.1:5500/images/Smiling%20woman%20standing%20in%20front%20of%20open%20wardrobe%20[Converted].png" cardPara="Organize your clothes by categories such as tops, bottoms, dresses, shoes, and accessories."/>
                    <AboutCard cardHeading="Photo Upload" cardImageSource="http://127.0.0.1:5500/images/2939909.png" cardPara="Take or upload photos of their clothes and accessories to the Website."/>
                    <AboutCard cardHeading="Outfit Creation" cardImageSource="http://127.0.0.1:5500/images/4851256.png" cardPara="Organize your clothes by categories such as tops, bottoms, dresses, shoes, and accessories."/>
                    <AboutCard cardHeading="Calender Integration" cardImageSource="http://127.0.0.1:5500/images/Smiling%20woman%20standing%20in%20front%20of%20open%20wardrobe%20[Converted].png" cardPara="Create outfits by combining items in their virtual wardrobe"/>
                </div>
                <div className='alpha'>
                    <AboutCard cardHeading="Weather Integration" cardImageSource="http://127.0.0.1:5500/images/Wavy_Eco-05_Single-03%20[Converted].png" cardPara="Information on the weather forecast, so you can plan your outfits accordingly"/>
                    <AboutCard cardHeading="Style Suggestions" cardImageSource="http://127.0.0.1:5500/images/Wavy_Tech-28_Single-09%20[Converted].png" cardPara="Suggests outfit combinations based on the your preferences, current trends, and fashion rules"/>
                    <AboutCard cardHeading="Wishlist Creation" cardImageSource="http://127.0.0.1:5500/images/wishlist.png" cardPara="Create a wishlist of clothes and accessories you would like to add to your virtual wardrobe."/>
                    <AboutCard cardHeading="Sharing" cardImageSource="http://127.0.0.1:5500/images/share.png" cardPara="Plan outfits for specific events by integrating your virtual wardrobe with your calendar"/>
                </div>
                <div className='alpha2'>
                    <AboutCard cardHeading="Analytics" cardImageSource="http://127.0.0.1:5500/images/analytics.png" cardPara="Provide you with analytics on your wardrobe"/>
                    <AboutCard cardHeading="Shopping" cardImageSource="http://127.0.0.1:5500/images/shopping.png" cardPara="Provide you with the option to shop for new clothes and accessories directly from the app."/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
