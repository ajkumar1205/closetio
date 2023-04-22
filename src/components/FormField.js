import React from 'react';

const FormField = (props) => {
  return (
    <div className="det">
        <lable>{props.lable}</lable>
        <input type={props.type} placeholder={props.placeholder} onChange={props.handler} value={props.value}/>
    </div>
  )
}

export default FormField;