import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/launch.css"
const LaunchPageButton = (props) => {
  return (
    <Link to={props.link} >
        <span className='hn'>
            <span className='as'>
                {props.name}
            </span>
        </span>
    </Link>
  )
}

export default LaunchPageButton
