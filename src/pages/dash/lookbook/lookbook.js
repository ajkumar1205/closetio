import React, {useState} from 'react'
import "./lookbook.css"
import TextRotator from './textRotator';


  function NavItem({itemName,isActive,onClick, children}){
    const handleClick =()=>{
      onClick(itemName);
    } 
  return (
    <span
      className={`Event_link ${(isActive)?"active":""}`}
      onClick={handleClick}
    >
      {children}
    </span>
  );
  }
  function EventBar(){
    const [activeItem, setActiveItem] = useState('occasional');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <nav className='Event_bar'>
        <NavItem itemName="occasional" isActive={activeItem === 'occasional'} onClick={handleItemClick}>
          Occasional Wear
        </NavItem>
        <NavItem itemName="casuals"  isActive={activeItem === 'casuals'}  onClick={handleItemClick}>
          Casuals Wear
        </NavItem>
        <NavItem  itemName="official"  isActive={activeItem === 'official'}  onClick={handleItemClick}>
         Work Place
        </NavItem>
      
    </nav>
  );
  }

export default function Lookbook() {



  return (
    <div>
        <div className='Element'>
        <EventBar/>
        <TextRotator/>

        </div>

   
    </div>
  );
}
    
// https://prod.spline.design/a7RVklDz3xdVRkma/scene.splinecode