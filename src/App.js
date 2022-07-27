import React, { useEffect, useRef, useContext } from 'react'
import {terms} from './termsOfService'
import { spanishTerms } from './termsOfSpanish'
import GenderDropdown from './GenderDropdown'
import CountryDropdown from './CountryDropdown'
import MonthDropdown from './MonthDropdown'
import YearDropdown from './YearDropdown'
import { AppContext  } from './context'


const App = () => {
  const { count, setCount, english, spanish, selectedMonth, setSelectedMonth, selectedYear, setSelectedYear, showTerms, setShowTerms, initialValues, formValues, formErrors, isSubmit, handleChange, handleSubmit, handleEnglish, handleSpanish} = useContext(AppContext)

  const rightNavContainerRef = useRef(null)
  const leftNavContainerRef = useRef(null)

 


  useEffect(() => {
    const containerHeight = rightNavContainerRef.current.getBoundingClientRect().height;
    leftNavContainerRef.current.style.height = `${containerHeight}px`
    if(count === 1 && formErrors) {
      leftNavContainerRef.current.style.height = `125vh`
    }
    if(count === 2) {
      leftNavContainerRef.current.style.height = `100vh`
    }
    if(count === 2 && formErrors) {
      leftNavContainerRef.current.style.height = `120vh`
    }
    if(count === 3) {
      leftNavContainerRef.current.style.height = `100vh`
    }
    if(count === 3 && formErrors) {
      leftNavContainerRef.current.style.height = `120vh`
    }
    if(count === 4) {
      leftNavContainerRef.current.style.height = `120vh`
    }
  }, [count])


  return (
    <>
     <div className='container-whole'>
      <div className='left-side-nav' ref={leftNavContainerRef}>
        <div className='image-container'>
          <img src='https://i.imgur.com/uR4AR4i.png' alt='logo' className='logo-image'/>
        </div>
      </div>
      <div className='right-side-nav' ref={rightNavContainerRef}>
        {Object.keys(formErrors).length === 0 && isSubmit && (
          <div className='registration-complete'>Registration Complete</div>
        )}    
        {count < 4 ? (
          <div className='language-container'>
            <button onClick={handleEnglish} className='eng-btn'></button>
            <button onClick={handleSpanish} className='spa-btn'></button>
          </div> ) :
          <div className='language-container language-container-step4'>
            <button onClick={handleEnglish} className='eng-btn'></button>
            <button onClick={handleSpanish} className='spa-btn'></button>
          </div>
        }

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
                    <label className='form-label'>{english && 'First Name'}{spanish && 'El Primer Nombre'}</label>
                    <input 
                      type='text'
                      className='form-control'
                      name='firstName'
                      onChange={handleChange} 
                      value={formValues.firstName}
                    />
                  </div>
                  <p className='error-message'>{formErrors.firstName}</p>
                  <div className='form-group'>
                    <label className='form-label'>{english && 'Last Name'}{spanish && 'El Apellido'}</label>
                    <input 
                      type='text'
                      className='form-control input-control'
                      name='lastName'
                      errorMessage='Last Name should contain the text only and range from 2-16 characters'
                      onChange={handleChange} 
                      value={formValues.lastName}
                    />
                  </div>  
                  <p className='error-message'>{formErrors.lastName}</p>
                  <div className='form-group'>
                  <GenderDropdown/>
                  </div>
                  <div className='form-group'>
                    <label className='form-label'>{english && 'Date of Birth'}{spanish && 'Fecha de Nacimiento'}</label>
                    <input 
                      type='date'
                      className='form-control'
                      name='date'
                      placeholder=''
                      onChange={handleChange} 
                      value={formValues.date}
                    />
                  </div> 
                  <div className='form-group'>
                    <label className='form-label'>{english && 'Phone'}{spanish && 'Teléfono'}</label>
                    <input 
                      type='tel'
                      className='form-control'
                      name='phone'
                      errorMessage=''
                      onChange={handleChange} 
                      value={formValues.phone}
                    />
                  </div> 
                  <p className='error-message'>{formErrors.phone}</p>
                  <CountryDropdown />
                </>      
              ): null}
            {count === 2 ? (
                <>
                  <div className='form-group form-transition'>
                    <label className='form-label'>{english && 'Username'}{spanish && 'Nombre de Usuario'}</label>
                    <input 
                      type='text'
                      className='form-control'
                      name='username'
                      errorMessage=''
                      onChange={handleChange} 
                      value={formValues.username}
                    />
                  </div> 
                  <p className='error-message'>{formErrors.username}</p>
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
                  <p className='error-message'>{formErrors.email}</p> 
                  <div className='form-group'>
                    <label className='form-label'>{english && 'Password'}{spanish && 'La Contraseña'}</label>
                    <input 
                      type='password'
                      className='form-control'
                      name='password'
                      errorMessage='Password should be 8-12 characters and it should include at least 1 letter 1 number and 1 special character!'
                      onChange={handleChange} 
                      value={formValues.password}
                    />
                  </div> 
                  <p className='error-message'>{formErrors.password}</p>
                  <div className='form-group'>
                    <label className='form-label'>{english && 'Confirm Password'}{spanish && 'Confirmar Contraseña'}</label>
                    <input 
                      type='password'
                      className='form-control'
                      name='confirmPassword'
                      errorMessage='Passwords do not match!'
                      onChange={handleChange} 
                      value={formValues.confirmPassword}
                    />
                  </div> 
                  <p className='error-message'>{formErrors.confirmPassword}</p>
                </>
            ): null}
            {count === 3 ? (
              <>
                  <div className='form-group'>
                    <label className='form-label'>{english && 'Credit Card Number (AMEX)'}{spanish && 'Número de Tarjeta de Crédito (AMEX)'}</label>
                    <input 
                      type="tel" 
                      inputmode="numeric" 
                      placeholder=""
                      className='form-control'
                      name='creditCard'
                      onChange={handleChange} 
                      value={formValues.creditCard}
                    />
                </div> 
                <p className='error-message'>{formErrors.creditCard}</p>
                <div className='mm-yy-dropdown-container'>
                  <MonthDropdown selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} english={english} spanish={spanish}/>
                  <YearDropdown selectedYear={selectedYear} setSelectedYear={setSelectedYear} english={english} spanish={spanish}/>
                </div>
                <div className='form-group'>
                  <label className='form-label'>CVV</label>
                  <input 
                    type='text'
                    className='form-control'
                    name='cvn'
                    onChange={handleChange} 
                    value={formValues.cvn}
                  />
                </div> 
                <p className='error-message'>{formErrors.cvn}</p>
              </>
            ): null}
            {count === 4 ? (
              <div className='terms-body'>
                  <div className='terms-box'>
                  <div className='terms-text'>
                    <h2>{english && 'terms of service'}{spanish && 'términos de servicio'}</h2>
                    <p>{english && 'Last Edit: 07/26/2022'}{spanish && 'Última Edición: 26/07/2022'}</p>
                    <p>{english && 'Greetings Users,'}{spanish && 'Saludos Usuarios,'}</p>
                    {english && terms}{spanish && spanishTerms}
                  </div>
                  <h3>{english && 'I agree to the '}{spanish && 'Estoy de acuerdo con la'}<span>{english && 'Terms of Service'}{spanish && 'Términos de Servicio'}</span>{english && ' and I read the Privacy Notice.'}{spanish && ' y leí el Aviso de Privacidad.'}</h3>
                  <div className='terms-buttons'>
                    {showTerms && count===4 && <button type='submit' className='submit-btn'>{english && 'Submit'}{spanish && 'Enviar'}</button>}
                    <button className='btn-accept red-btn' onClick={() => setShowTerms(true)}>{english && 'Accept'}{spanish && 'Aceptar'}</button>
                    <button className='btn-decline gray-btn' onClick={() => setShowTerms(false)}>{english && 'Decline'}{spanish && 'Rechazar'}</button>
                  </div>
                </div>
              </div>
            ): null}
            {(count === 4) ? (
              <button 
                className='btn btn-dark btn-margin btn-prev' 
                type='button' 
                onClick={() => setCount(count - 1)}
                disabled={count < 2}
              >
                {english && 'Back'}{spanish && 'Espalda'}
              </button>     
            ): null}
            </form>
            {(count > 1 && count < 4) ? (
              <button 
                className='btn btn-dark btn-prev' 
                type='button' 
                onClick={() => setCount(count - 1)}
                disabled={count < 2}
              >
                {english && 'Back'}{spanish && 'Espalda'}
              </button>     
            ): null}
            {(count < 4) ? (
              <button 
                className='btn btn-light btn-next' 
                type='button' 
                onClick={() => setCount(count + 1)}
                disabled={count > 4}
              >
                {english && 'Next'}{spanish && 'Siguiente'}
              </button>
            ): null}
        </div>
      </div> 
    </div>  
    </>
  )
}

export default App