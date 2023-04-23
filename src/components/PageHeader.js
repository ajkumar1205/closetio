import React from 'react'
import '../assets/launch.css'

const PageHeader = (props) => {
  return (
      <div className="head">{props.white} <span className ="hn"><span className ="as">{props.gradient}</span></span></div>
  )
}

export default PageHeader