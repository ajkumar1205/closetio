import React from 'react';

const Submit = (props) => {
  return (
    <div className="det">
        <input type="submit" className="submit" onClick={props.clickHandler}/>
    </div>
  )
}

export default Submit;