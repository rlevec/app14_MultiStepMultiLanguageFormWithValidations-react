import React, { useContext } from 'react'

const FormInput = (props) => {
  const {name, placeholder, formValues, handleChange, type, label, formErrors} = props
  return (
    <>
        <label className='form-label'>{label}</label>
        <input 
            placeholder={placeholder}
            type={type}
            className='form-control'
            name={name}
            onChange={handleChange} 
            value={formValues}
        />
        <p className='error-message'>{formErrors}</p>
    </>
  )
}

export default FormInput