import React, { useState, useEffect } from 'react'
import {terms} from './termsOfService'
import GenderDropdown from './GenderDropdown'
import CountryDropdown from './CountryDropdown'
import MonthDropdown from './MonthDropdown'
import YearDropdown from './YearDropdown'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'


const App = () => {

  const [selectedGender, setSelectedGender] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [showTerms, setShowTerms] = useState(false)
  const initialValues = {
    firstName: '',
    lastName: '',
    date: '',
    phone: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    creditCard: '',
    cvn: '',
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const [data, setData] = useState([])
  console.log(data)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const [count, setCount] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  

  const validate = (values) => {
    const errors = {}
    const firstNameRegex = /^[a-zA-Z]*$/
    const lastNameRegex = /^[a-zA-Z]*$/
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
    const usernameRegex = /^([a-z0-9]|[-._](?![-._])){4,20}$/
    if(!values.firstName) {
      errors.firstName = 'First Name is required'
    }
    else if(!firstNameRegex.test(values.firstName)) {
      errors.firstName = 'This is not a valid first name (only alphabet characters)'
    }
    if(!values.lastName) {
      errors.lastName = 'Last Name is required'
    }
    else if(!lastNameRegex.test(values.firstName)) {
      errors.lastName = 'This is not a valid first name (only alphabet characters)'
    }
    if(!values.email) {
      errors.email = 'Email is required'
    }
    else if(!emailRegex.test(values.email)) {
      errors.email = 'This is not a valid email format'
    }
    if(!values.password) {
      errors.password = 'Password is required'
    }
    else if(!passwordRegex.test(values.password)) {
      errors.password = 'Minimum eight and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
    }
    if(!values.confirmPassword) {
      errors.confirmPassword = 'Password is required'
    }
    else if((values.password !== values.confirmPassword)) {
      errors.confirmPassword = 'Passwords do not match'
    }
    if(!values.username) {
      errors.username = 'Username is required'
    }
    else if(!usernameRegex.test(values.username)) {
      errors.username = 'Must have between 4 and 20 characters, must not contain anything but letters a-z, digits 0-9 and special characters -._, the special characters -._ must not be used successively in order to avoid confusion and the field must not contain whitespaces'
    }
    return errors
  }


  return (
    <>
     <div className='container-whole'>
      <div className='left-side-nav'>
        <div className='image-container'>
          <img src='https://i.imgur.com/uR4AR4i.png' alt='logo' className='logo-image'/>
        </div>
      </div>
      <div className='right-side-nav'>
        {Object.keys(formErrors).length === 0 && isSubmit ? (<div>Registration complete</div>) : <div></div>}
        <div className='app'>
            <div className='progressBar-container'>
              <div className='progress-container'>
                <div className={`current-progress ${count >=1 && 'current-progress-step1'} ${count >=2 && 'current-progress-step2'} ${count >= 3 && 'current-progress-step3'} ${count >= 4 && 'current-progress-step4'}`}></div>
                <div className={`circle-passive ${count >= 1 && 'circle-active'}`}>1</div>   
                <div className={`circle-passive ${count >= 2 && 'circle-active'}`}>2</div>   
                <div className={`circle-passive ${count >= 3 && 'circle-active'}`}>3</div>   
                <div className={`circle-passive ${count >= 4 && 'circle-active'}`}>4</div>   
              </div>
            </div>
            <form className='col-15 form' onSubmit={handleSubmit}>
              {count === 1 ? (
                <>
                  <div className='form-group'>
                    <label className='form-label'>First Name</label>
                    <input 
                      type='text'
                      className='form-control'
                      name='firstName'
                      onChange={handleChange} 
                      value={formValues.firstName}
                    />
                  </div>
                  <p>{formErrors.firstName}</p>
                  <div className='form-group'>
                    <label className='form-label'>Last Name</label>
                    <input 
                      type='text'
                      className='form-control input-control'
                      name='lastName'
                      errorMessage='Last Name should contain the text only and range from 2-16 characters'
                      onChange={handleChange} 
                      value={formValues.lastName}
                    />
                  </div>  
                  <p>{formErrors.lastName}</p>
                  <div className='form-group'>
                  <GenderDropdown selected={selectedGender} setSelected={setSelectedGender}/>
                  </div>
                  <div className='form-group'>
                    <label className='form-label'>Date of Birth</label>
                    <input 
                      type='date'
                      className='form-control'
                      name='date'
                      onChange={handleChange} 
                      value={formValues.date}
                    />
                  </div> 
                  <div className='form-group'>
                    <label className='form-label'>Phone</label>
                    <input 
                      type='tel'
                      className='form-control'
                      name='phone'
                      errorMessage=''
                      onChange={handleChange} 
                      value={formValues.phone}
                    />
                  </div> 
                  <CountryDropdown selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
                </>      
              ): null}
            {count === 2 ? (
                <>
                  <div className='form-group form-transition'>
                    <label className='form-label'>Username</label>
                    <input 
                      type='text'
                      className='form-control'
                      name='username'
                      errorMessage=''
                      onChange={handleChange} 
                      value={formValues.username}
                    />
                  </div> 
                  <p>{formErrors.username}</p>
                  <div className='form-group'>
                    <label className='form-label'>Email</label>
                    <input 
                      type='email'
                      className='form-control'
                      name='email'
                      errorMessage='It should be a valid email address!'
                      onChange={handleChange} 
                      value={formValues.email}
                    />
                  </div>
                  <p>{formErrors.email}</p> 
                  <div className='form-group'>
                    <label className='form-label'>Password</label>
                    <input 
                      type='password'
                      className='form-control'
                      name='password'
                      errorMessage='Password should be 8-12 characters and it should include at least 1 letter 1 number and 1 special character!'
                      onChange={handleChange} 
                      value={formValues.password}
                    />
                  </div> 
                  <p>{formErrors.password}</p>
                  <div className='form-group'>
                    <label className='form-label'>Confirm Password</label>
                    <input 
                      type='password'
                      className='form-control'
                      name='confirmPassword'
                      errorMessage='Passwords do not match!'
                      onChange={handleChange} 
                      value={formValues.confirmPassword}
                    />
                  </div> 
                  <p>{formErrors.confirmPassword}</p>
                </>
            ): null}
            {count === 3 ? (
              <>
                  <div className='form-group'>
                    <label className='form-label'>Credit Card Number</label>
                    <input 
                      type="tel" 
                      inputmode="numeric" 
                      pattern="[0-9\s]{13,19}" 
                      autoComplete="cc-number" 
                      maxLength="19" 
                      placeholder="xxxx xxxx xxxx xxxx"
                      className='form-control'
                      name='creditCard'
                      onChange={handleChange} 
                      value={formValues.creditCard}
                    />
                </div> 
                <div className='mm-yy-dropdown-container'>
                  <MonthDropdown selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth}/>
                  <YearDropdown selectedYear={selectedYear} setSelectedYear={setSelectedYear}/>
                </div>
                <div className='form-group'>
                  <label className='form-label'>CVN</label>
                  <input 
                    type='text'
                    className='form-control'
                    name='cvn'
                    onChange={handleChange} 
                    value={formValues.cvn}
                  />
                </div> 
              </>
            ): null}
            {count === 4 ? (
              <div className='terms-body'>
                  <div className='terms-box'>
                  <div className='terms-text'>
                    <h2>terms of service</h2>
                    <p>Last Edit: 04/13/2022</p>
                    <p>Greetings Users,</p>
                    {terms}
                  </div>
                  <h3>I agree to the <span>Terms of Service</span> and I read the Privacy Notice.</h3>
                  <div className='terms-buttons'>
                    {showTerms && <button className='submit-btn'>Submit</button>}
                    <button className='btn-accept red-btn' onClick={() => setShowTerms(true)}>Accept</button>
                    <button className='btn-decline gray-btn' onClick={() => setShowTerms(false)}>Decline</button>
                  </div>
                </div>
              </div>
            ): null}
            {(count === 4) ? (
              <button 
                className='btn btn-dark btn-margin' 
                type='submit' 
                onClick={() => setCount(count - 1)}
                disabled={count < 2}
              >
                Back
              </button>     
            ): null}
            {(count === 4 && terms === true) ? (
              <button className='btn btn-primary' type='submit'>Submit</button>
            ): null}
            </form>
            {(count > 1 && count < 4) ? (
              <button 
                className='btn btn-dark' 
                type='submit' 
                onClick={() => setCount(count - 1)}
                disabled={count < 2}
              >
                Back
              </button>     
            ): null}
            {(count < 4) ? (
              <button 
                className='btn btn-light' 
                type='submit' 
                onClick={() => setCount(count + 1)}
                disabled={count > 4}
              >
                Next
              </button>
            ): null}
        </div>
      </div> 
    </div>  
    </>
  )
}

export default App