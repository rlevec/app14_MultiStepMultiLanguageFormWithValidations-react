import React, { useEffect, useRef, useContext, useState } from 'react'
import TermsOfServiceComponent from './TermsOfServiceComponent'
import GenderDropdown from './GenderDropdown'
import CountryDropdown from './CountryDropdown'
import MonthDropdown from './MonthDropdown'
import YearDropdown from './YearDropdown'
import { AppContext  } from './context'
import PropagateLoader from "react-spinners/PropagateLoader";
import FormInput from './FormInput'
import formJson from './sampleData.json'
console.log(formJson)


const App = () => {
  const { count, setCount, english, spanish, selectedMonth, setSelectedMonth, selectedYear, setSelectedYear, showTerms, setShowTerms, formValues, formErrors, setIsSubmit, isSubmit, handleChange, handleSubmit, handleEnglish, handleSpanish, loading, setLoading, selectedGender, selectedCountry, loadingStep, setLoadingStep, regLoader, setRegLoader} = useContext(AppContext)

  const rightNavContainerRef = useRef(null)
  const leftNavContainerRef = useRef(null)





  useEffect(() => {
    setLoading(true)
    let timeOut = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [])

  useEffect(() => {
    setLoadingStep(true)
    let timeOut = setTimeout(() => {
      setLoadingStep(false)
    }, 1000)
    return () => clearTimeout(timeOut)
  }, [count])

  useEffect(() => {
    setRegLoader(true)
    let timeOut = setTimeout(() => {
      setRegLoader(false)
      setIsSubmit(false)
    }, 7000)
    return () => clearTimeout(timeOut)
  }, [isSubmit])

  

   useEffect(() => {
    const containerHeight = rightNavContainerRef.current.getBoundingClientRect().height;
    leftNavContainerRef.current.style.height = `${containerHeight}vh`
  }, [])


  useEffect(() => {
    if(count === 1 && Object.keys(formErrors).length !== 0) {
      leftNavContainerRef.current.style.height = `135vh`
    }
    if(count === 2) {
      leftNavContainerRef.current.style.height = `100vh`
    }
    if(count === 2 && Object.keys(formErrors).length !== 0) {
      leftNavContainerRef.current.style.height = `120vh`
    }
    if(count === 3 ) {
      leftNavContainerRef.current.style.height = `100vh`
    }
    if(count === 3 && Object.keys(formErrors).length !== 0) {
      leftNavContainerRef.current.style.height = `120vh`
    }
    if(count === 4) {
      leftNavContainerRef.current.style.height = `120vh`
    }
  }, [count])




  return (
    <>
     <div className='container-whole'>
      {
        loading ? (
          <PropagateLoader className='loader' size={30} color={"#002D62"} loading={loading}
        />) : (

      <>
      <div className='left-side-nav' ref={leftNavContainerRef}>
        <div className='image-container'>
          <img src='https://i.imgur.com/uR4AR4i.png' alt='logo' className='logo-image'/>
        </div>
      </div>
      <div className='right-side-nav' ref={rightNavContainerRef}>
        {Object.keys(formErrors).length === 0 && regLoader && (
          <div className='registration-complete'>{english ? 'Registration Complete' : 'Registro Completo'}</div>
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
                { loadingStep ? (
                  <PropagateLoader className='loader-step1' size={30} color={"#002D62"} loading={loadingStep}
                />) : (
                  <div>
                    
                    <div className='form-group'>
                      <FormInput label={english ? 'First Name' : 'El Primer Nombre'} name='firstName' placeholder='Sofia' formValues={formValues.firstName} handleChange={handleChange} type='text' formErrors={formErrors.firstName}/>
                    </div>
                    <div className='form-group'>
                      <FormInput label={english ? 'Last Name' : 'El Apellido'} name='lastName' placeholder='Vergara' formValues={formValues.lastName} handleChange={handleChange} type='text' formErrors={formErrors.lastName}/>
                    </div> 
                    <div className='form-group'>
                    <GenderDropdown/>
                    {(!selectedGender) ? <p className='error-message'>{english ? 'Pick a gender' : 'Elige un género'}</p> : null}
                    </div>
                    <div className='form-group'>
                      <FormInput label={english ? 'Date of Birth' : 'Fecha de Nacimiento'} name='date' type='date' placeholder='10/07/1972' formValues={formValues.date} handleChange={handleChange} formErrors={formErrors.date}/>  
                    </div> 
                    <div className='form-group'>
                      <FormInput label={english ? 'Phone' : 'Teléfono'} name='phone' placeholder='00385955191714' formValues={formValues.phone} handleChange={handleChange} type='tel' formErrors={formErrors.phone}/>
                    </div> 
                    <CountryDropdown />
                    {(!selectedCountry) ? <p className='error-message'>{english ? 'Pick a country' : 'Elige un país'}</p> : null}
                  </div>)}
                </>      
              ): null}
            {count === 2 ? (
                <>
                  { loadingStep ? (
                  <PropagateLoader className='loader-step1' size={30} color={"#002D62"} loading={loadingStep}
                />) : (
                  <div>
                    
                    <div className='form-group form-transition'>
                      <FormInput label={english ? 'Username' : 'Nombre de Usuario'} name='username' placeholder='sofia_v_222' formValues={formValues.username} handleChange={handleChange} type='text' formErrors={formErrors.username}/>
                    </div> 
                    <div className='form-group'>
                      <FormInput label='Email' name='email' placeholder='sofia.vergara@gmail.com' formValues={formValues.email} handleChange={handleChange} type='email' formErrors={formErrors.email}/>
                    </div>
                    <div className='form-group'>
                      <FormInput label={english ? 'Password' : 'La Contraseña'} name='password' placeholder='Sofia!7111993' formValues={formValues.password} handleChange={handleChange} type='password' formErrors={formErrors.password}/>
                    </div> 
                    <div className='form-group'>
                      <FormInput label={english ? 'Confirm Password' : 'Confirmar Contraseña'} name='confirmPassword' placeholder='' formValues={formValues.confirmPassword} handleChange={handleChange} type='password' formErrors={formErrors.confirmPassword}/>
                    </div>
                  </div>)}
                </>
            ): null}
            {count === 3 ? (
              <>
              { loadingStep ? (
                  <PropagateLoader className='loader-step1' size={30} color={"#002D62"} loading={loadingStep}
                />) : (
                  <div>
                    <div className='form-group'>
                      <FormInput label={english ? 'Credit Card Number (AMEX)' : 'Número de Tarjeta de Crédito (AMEX)'} name='creditCard' placeholder='375987654321001' formValues={formValues.creditCard} handleChange={handleChange} type='tel' formErrors={formErrors.creditCard}/>
                  </div> 
                  <div className='mm-yy-dropdown-container'>
                    <MonthDropdown selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} english={english} spanish={spanish}/>
                    {(!selectedMonth) ? <p className='error-message error-message-margin'>{english ? 'Pick a month' : 'Elige un mes'}</p> : null}
                    <YearDropdown selectedYear={selectedYear} setSelectedYear={setSelectedYear} english={english} spanish={spanish}/>
                    {(!selectedYear) ? <p className='error-message error-message-margin'>{english ? 'Pick a month' : 'Elige un año'}</p> : null}
                  </div>
                  <div className='form-group'>
                    <FormInput label='CVV' name='cvn' placeholder='6178' formValues={formValues.cvn} handleChange={handleChange} type='text' formErrors={formErrors.cvn}/>
                  </div> 
                </div>)}
              </>
            ): null}
            {count === 4 ? (
              <>
              { loadingStep ? (
                  <PropagateLoader className='loader-step1' size={30} color={"#002D62"} loading={loadingStep}
                />) : (
                  <TermsOfServiceComponent />
                )}
              </>
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
      </>)}
    </div>  
    </>
  )
}

export default App