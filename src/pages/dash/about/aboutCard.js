import React from 'react'
import "./about.css"

const AboutCard = (props) => {
  return (
    <div className='alpha1'>
      <div className='beta1'>
        <div className='beta'>
            <h4>{props.cardHeading}</h4>
            <img className='mr' src={props.cardImageSource}/>
            <p className='w'>{props.cardPara}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
