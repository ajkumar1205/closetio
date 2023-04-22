import React from 'react'
import PageHeader from '../../../components/PageHeader'
import './closet.css'
import Aisle from './aisle'
import Navbar from '../NavBar'

const Closet = () => {
  return (
    <div className='containers'>
    <Navbar/>
    <div className='content'>
      
        <PageHeader white="Your" gradient="Closet"/>
        <div className='content1'>
        <Aisle Item="Topwear"/>
        <Aisle Item="Bottomwear"/>
        <Aisle Item="Footwear"/>
        <Aisle Item="Accessories"/>
    </div>    
    </div>
    </div>
  )
}

export default Closet
