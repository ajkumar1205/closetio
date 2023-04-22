import React from 'react'

const SkinToneSelector = (props) => {
    const skintones = [
        {name: "Ivory", value: "1", className: "a"},
        {name: "Porcelain", value: "2", className: "b"},
        {name: "Pale Ivory", value: "3", className: "c"},
        {name: "Warm Ivory", value: "4", className: "d"},
        {name: "Sand", value: "5", className: "e"},
        {name: "Rose Beige", value: "6", className: "f"},
        {name: "Limestone", value: "7", className: "g"},
        {name: "Beige", value: "8", className: "h"},
        {name: "Sienna", value: "9", className: "i"},
        {name: "Honey", value: "10", className: "j"},
        {name: "Band", value: "11", className: "k"},
        {name: "Almond", value: "12", className: "l"},
        {name: "Chestnut", value: "13", className: "m"},
        {name: "Bronze", value: "14", className: "n"},
        {name: "Caramel", value: "15", className: "o"},
        {name: "Golden", value: "16", className: "p"},
        {name: "Espresso", value: "17", className: "q"},
        {name: "Chocolate", value: "18", className: "r"}
    ]
  return (
    <div className="det">
        <lable>Skin Color</lable>
        <select onChange={props.handler} >
            <option value="0">Select Skin Tone:</option>
            {skintones.map((skintone) => {
                return <option className={skintone.className} value={skintone.value}>{skintone.name}</option>
            })}
        </select>
    </div>
  )
}

export default SkinToneSelector