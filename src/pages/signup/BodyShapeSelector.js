import React from 'react'

const BodyShapeSelector = (props) => {

    const femaleBodyShapes = [
        {value: "1", text: "Rectangle"},
        {value: "2", text: "Triangle or 'Pear'"},
        {value: "3", text: "Spoon"},
        {value: "4", text: "Hourglass"},
        {value: "5", text: "Top Hourglass"},
        {value: "6", text: "Bottom Hourglass"},
        {value: "7", text: "Inverted Triangle"},
        {value: "8", text: "Round"},
        {value: "9", text: "Diamond"},
        {value: "10", text: "Athletic"},
    ]

    const maleBodyShapes = [
        {value: "11", text: "Rectangle"},
        {value: "12", text: "Inverted Triangle"},
        {value: "13", text: "Trapezoid"},
        {value: "14", text: "Triangle"},
        {value: "15", text: "Oval"},
    ]

  return (
    <div className="det">
        <lable>Body Type</lable>
        <select onChange={props.handler} >
            <option value="0">Select Body Type:</option>
            {femaleBodyShapes.map((shape) => {
                return <option value={shape.value} className='female'>{shape.text}</option>
            })}
            {maleBodyShapes.map((shape) => {
                return <option value={shape.value} className='Male'>{shape.text}</option>})}
        </select>
    </div>
  )
}

export default BodyShapeSelector;