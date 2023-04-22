import React from 'react'

const GenderSelector = (props) => {
    const genders = [
      {value: "0", name : "Select Gender"},
      {value: "1", name: "Famale"},
      {value : "2", name: "Male"},
      {value : "3", name: "Non-Binary"},
      {value : "4", name: "Other"},
      {value : "5", name: "Prefer Not to Answer"}
    ]
  return (
    <div className="det">
        <lable>Gender</lable>
        <select onChange={props.handler}>
            {genders.map((gender) => {
              return <option value={gender.value}>{gender.name}</option>
            })}
        </select>
    </div>
  )
}

export default GenderSelector