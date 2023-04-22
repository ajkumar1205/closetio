import React from 'react'
import { Link } from 'react-router-dom'


const NavLink = (props) => {
  return (
    <Link className={props.class} to={props.link}>
      {props.name}
    </Link>
  )
}

export default NavLink;
