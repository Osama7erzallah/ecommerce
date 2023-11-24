import React from 'react'

export default function Input({ value, onChange, name, title, type, id, errors, onBlur, touched }) {
  return (
    <div className='my_input'>
      <label htmlFor={id}>{title} </label> 
      <input onChange={onChange} type={type} id={id} name={name} className='form-control' value={value} onBlur={onBlur} />
      {touched[name] && errors[name] && <p className='text text-danger text-end'>{errors[name]} <i className="fa-solid fa-circle-exclamation"></i></p>}
    </div>
  )
}
