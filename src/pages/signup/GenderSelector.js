import React from 'react'

const GenderSelector = (props) => {
    const genders = [
      "Select Gender",
      "Famale",
      "Male",
      "Non-Binary",
      "Other",
      "Prefer Not to Answer"
    ]
  return (
    <div className="det">
        <lable>Gender</lable>
        <select onChange={props.handler}>
            {genders.map((gender) => {
              return <option value={gender}>{gender}</option>
            })}
        </select>
    </div>
  )
}

export default GenderSelector