import React, { useState } from 'react'


const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(false)
  const [loadingStep, setLoadingStep] = useState(false)
  const [formLoader, setFormLoader] = useState(false)
  const [count, setCount] = useState(1)
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
    const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
    setData(formValues.firstName, formValues.lastName, selectedGender, formValues.date, formValues.phone, selectedCountry, formValues.username, formValues.password, formValues.confirmPassword, formValues.creditCard, selectedMonth, selectedYear, formValues.cvn)
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
    const cvnRegex = /\d{4}/
    const creditCardRegex = /^3[47][0-9]{13}$/
    const phoneRegex = /(\+|00)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/

    if(!values.firstName) {
      english ? errors.firstName = 'First Name is required' : errors.firstName = 'Se requiere el primer nombre'
    }
    else if(!firstNameRegex.test(values.firstName)) {
      english ? errors.firstName = 'This is not a valid first name (only alphabet characters)' : errors.firstName = 'Este no es un nombre válido (solo caracteres alfabéticos)'
    }
    if(!values.lastName) {
      english ? errors.lastName = 'Last Name is required' : errors.lastName = 'Se requiere apellido'     
    }
    else if(!lastNameRegex.test(values.lastName)) {
      english ? errors.lastName = 'This is not a valid last name (only alphabet characters)' : errors.lastName = 'Se requiere apellido'
    }
    if(!values.email) {
      english ? errors.email = 'Email is required' : errors.email = 'Correo electronico es requerido'
    }
    else if(!emailRegex.test(values.email)) {
      english ? errors.email = 'This is not a valid email format' : errors.email = 'Este no es un formato de correo electrónico válido'
    }
    if(!values.password) {
      english ? errors.password = 'Password is required' : errors.password = 'Se requiere contraseña'
    }
    else if(!passwordRegex.test(values.password)) {
      english ? errors.password = '8-20 characters, at least one uppercase letter, one lowercase letter, one number and one special character' : errors.password = '8-20 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'
    }
    if(!values.confirmPassword) {
      english ? errors.confirmPassword = 'Password is required' : errors.confirmPassword = 'Se requiere contraseña'
    }
    else if((values.password !== values.confirmPassword)) {
      english ? errors.confirmPassword = 'Passwords do not match' : errors.confirmPassword = 'Las contraseñas no coinciden'
    }
    if(!values.username) {
      english ? errors.username = 'Username is required' : errors.username = 'Se requiere nombre de usuario'
    }
    else if(!usernameRegex.test(values.username)) {
      english ? errors.username = '4-20 characters, nothing but letters a-z, digits 0-9 and special characters -._, the special characters must not be used successively and no whitespaces' : errors.username = '4-20 caracteres, nada más que letras a-z, dígitos 0-9 y caracteres especiales -._, los caracteres especiales no deben usarse sucesivamente y sin espacios en blanco'
    }
    if(!values.cvn) {
      english ? errors.cvn = 'CVV is required' : errors.cvn = 'Se requiere CVV'
    }
    else if(!cvnRegex.test(values.cvn)) {
      english ? errors.cvn = ' Four digits on the front' : errors.cvn = 'Cuatro dígitos en el frente'
    }
    if(!values.creditCard) {
      english ? errors.creditCard = 'Credit Card number is required' : errors.creditCard = 'Se requiere número de tarjeta de crédito'
    }
    else if(!creditCardRegex.test(values.creditCard)){
      english ? errors.creditCard = 'American Express card numbers start with 34 or 37 and have 15 digits' : errors.creditCard = 'Los números de las tarjetas American Express comienzan con 34 o 37 y tienen 15 dígitos'
    }
    if(!values.phone) {
      english ? errors.phone = 'Phone Number is required' : errors.phone = 'Se requiere número de teléfono'
    }
    else if(!phoneRegex.test(values.phone)){
      english ? errors.phone = 'Not a valid Phone Number (00385919567919 Croatia example)' : errors.phone = 'No es un número de teléfono válido (0034911123456 ejemplo de España)'
    }
    if(!values.date) {
      english ? errors.date = 'Birth date is required' : errors.date = 'Se requiere la fecha de nacimiento'
    }
    return errors
  }

    

    return (
        <AppContext.Provider value={
            {count, setCount, english, setEnglish, 
spanish, setSpanish, selectedGender, setSelectedGender, selectedCountry, setSelectedCountry, selectedMonth, 
setSelectedMonth, selectedYear, setSelectedYear, showTerms, setShowTerms, initialValues, formValues, setFormValues, formErrors, setFormErrors,
isSubmit, setIsSubmit, data, setData, handleChange, handleSubmit, handleEnglish, handleSpanish, loading, setLoading, loadingStep, setLoadingStep, formLoader, setFormLoader}
        }>{children}</AppContext.Provider>
    )
}



export {AppContext, AppProvider}