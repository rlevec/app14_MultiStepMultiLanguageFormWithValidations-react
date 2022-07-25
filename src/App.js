import React, { useState } from 'react'
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

  const [form, setForm] = useState({
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
  })

  const [data, setData] = useState([])
  console.log(data)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const [count, setCount] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setData([...data, form.firstName, form.lastName, form.date, form.phone, form.username, form.email, form.password, form.confirmPassword, form.creditCard, form.cvn, selectedGender, selectedCountry, selectedMonth, selectedYear, showTerms])
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
                      value={form.firstName}
                    />
                  </div>
                  <div className='form-group'>
                    <label className='form-label'>Last Name</label>
                    <input 
                      type='text'
                      className='form-control input-control'
                      name='lastName'
                      onChange={handleChange} 
                      value={form.lastName}
                    />
                  </div> 
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
                      value={form.date}
                    />
                  </div> 
                  <div className='form-group'>
                    <label className='form-label'>Phone</label>
                    <input 
                      type='tel'
                      className='form-control'
                      name='phone'
                      onChange={handleChange} 
                      value={form.phone}
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
                      onChange={handleChange} 
                      value={form.username}
                    />
                  </div> 
                  <div className='form-group'>
                    <label className='form-label'>Email</label>
                    <input 
                      type='email'
                      className='form-control'
                      name='email'
                      onChange={handleChange} 
                      value={form.email}
                    />
                  </div> 
                  <div className='form-group'>
                    <label className='form-label'>Password</label>
                    <input 
                      type='password'
                      className='form-control'
                      name='password'
                      onChange={handleChange} 
                      value={form.password}
                    />
                  </div> 
                  <div className='form-group'>
                    <label className='form-label'>Confirm Password</label>
                    <input 
                      type='password'
                      className='form-control'
                      name='confirmPassword'
                      onChange={handleChange} 
                      value={form.confirmPassword}
                    />
                  </div> 
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
                      value={form.creditCard}
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
                    value={form.cvn}
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