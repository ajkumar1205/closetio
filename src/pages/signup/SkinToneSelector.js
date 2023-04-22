import React from 'react'

const SkinToneSelector = (props) => {
    const skintones = [
        {name: "Ivory", className: "a"},
        {name: "Porcelain", className: "b"},
        {name: "Pale Ivory", className: "c"},
        {name: "Warm Ivory", className: "d"},
        {name: "Sand", className: "e"},
        {name: "Rose Beige", className: "f"},
        {name: "Limestone", className: "g"},
        {name: "Beige", className: "h"},
        {name: "Sienna", className: "i"},
        {name: "Honey", className: "j"},
        {name: "Band", className: "k"},
        {name: "Almond", className: "l"},
        {name: "Chestnut", className: "m"},
        {name: "Bronze", className: "n"},
        {name: "Caramel", className: "o"},
        {name: "Golden", className: "p"},
        {name: "Espresso", className: "q"},
        {name: "Chocolate", className: "r"}
    ]
  return (
    <div className="det">
        <lable>Skin Color</lable>
        <select onChange={props.handler} >
            <option value="0">Select Skin Tone:</option>
            {skintones.map((skintone) => {
                return <option className={skintone.className} value={skintone.name}>{skintone.name}</option>
            })}
        </select>
    </div>
  )
}

export default SkinToneSelector