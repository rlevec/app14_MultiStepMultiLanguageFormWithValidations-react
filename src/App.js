import React, { useState, useEffect } from 'react'
import {terms} from './termsOfService'
import { spanishTerms } from './termsOfSpanish'
import GenderDropdown from './GenderDropdown'
import CountryDropdown from './CountryDropdown'
import MonthDropdown from './MonthDropdown'
import YearDropdown from './YearDropdown'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const App = () => {

  const [english, setEnglish] = useState(true)
  const [spanish, setSpanish] = useState(false)
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

  const handleEnglish = () => {
    setEnglish(true)
    setSpanish(false)
  }

  const handleSpanish = () => {
    setSpanish(true)
    setEnglish(false)
  }

  

  const validate = (values) => {
    const errors = {}
    const firstNameRegex = /^[a-zA-Z]*$/
    const lastNameRegex = /^[a-zA-Z]*$/
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
    const usernameRegex = /^([a-z0-9]|[-._](?![-._])){4,20}$/
    const cvnRegex = /\d{3}/
    const creditCardRegex = /^3[47][0-9]{13}$/
    const phoneRegex = /(\+|00)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/

    if(!values.firstName) {
      errors.firstName = 'First Name is required'
    }
    else if(!firstNameRegex.test(values.firstName)) {
      errors.firstName = 'This is not a valid first name (only alphabet characters)'
    }
    if(!values.lastName) {
      errors.lastName = 'Last Name is required'
    }
    else if(!lastNameRegex.test(values.lastName)) {
      errors.lastName = 'This is not a valid last name (only alphabet characters)'
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
      errors.password = '8-20 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
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
      errors.username = '4-20 characters, nothing but letters a-z, digits 0-9 and special characters -._, the special characters must not be used successively and no whitespaces'
    }
    if(!values.cvn) {
      errors.cvn = 'CVC is required'
    }
    else if(!cvnRegex.test(values.cvn)) {
      errors.cvn = '3 digits'
    }
    if(!values.creditCard) {
      errors.creditCard = 'Credit Card number is required'
    }
    else if(!creditCardRegex.test(values.creditCard)){
      errors.creditCard = 'Not a valid Credit Card number'
    }
    if(!values.phone) {
      errors.phone = 'Phone Number is required'
    }
    else if(!phoneRegex.test(values.phone)){
      errors.phone = 'Not a valid Phone Number (00385919567919 Croatia example)'
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
        <div className='language-container'>
          <button onClick={handleEnglish} className='eng-btn'></button>
          <button onClick={handleSpanish} className='spa-btn'></button>
        </div>
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
                  <GenderDropdown selected={selectedGender} setSelected={setSelectedGender} english={english} spanish={spanish}/>
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
                  <CountryDropdown selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} english={english} spanish={spanish}/>
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
                    <label className='form-label'>{english && 'Credit Card Number'}{spanish && 'Número de Tarjeta de Crédito'}</label>
                    <input 
                      type="tel" 
                      inputmode="numeric" 
                      placeholder="xxxx xxxx xxxx xxxx"
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
                  <label className='form-label'>CVC</label>
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