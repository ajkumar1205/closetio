import React from 'react'

const PageHeader = (props) => {
  return (
      <div class="head">{props.white} <span class ="hn"><span class ="as">{props.gradient}</span></span></div>
  )
}

export default PageHeader