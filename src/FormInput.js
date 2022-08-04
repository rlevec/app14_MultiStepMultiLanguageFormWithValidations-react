import React, { useContext } from 'react'

const FormInput = (props) => {
  const {name, placeholder, formValues, handleChange, type} = props
  return (
    <>
        <input 
            placeholder={placeholder}
            type={type}
            className='form-control'
            name={name}
            onChange={handleChange} 
            value={formValues.name}
        />
    </>
  )
}

export default FormInput