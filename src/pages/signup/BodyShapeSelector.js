import React from 'react'

const BodyShapeSelector = (props) => {

    const bodyShapes = [
        "Rectangle",
        "Triangle or 'Pear'",
        "Spoon",
        "Hourglass",
        "Top Hourglass",
        "Bottom Hourglass",
        "Inverted Triangle",
        "Round",
        "Diamond",
        "Athletic",
        "Inverted Triangle",
        "Trapezoid",
        "Oval"
    ]

  return (
    <div className="det">
        <lable>Body Type</lable>
        <select onChange={props.handler} >
            <option value="0">Select Body Type:</option>
            {bodyShapes.map((shape) => {
                return <option value={shape} className='female'>{shape}</option>
            })}
            
        </select>
    </div>
  )
}

export default BodyShapeSelector;