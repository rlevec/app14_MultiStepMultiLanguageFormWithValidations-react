import React, { useContext } from 'react'
import {terms} from './termsOfService'
import { spanishTerms } from './termsOfSpanish'
import { AppContext } from './context'

const TermsOfServiceComponent = () => {
  const {english, spanish, showTerms, setShowTerms, count} = useContext(AppContext)
  return (
    <>
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
    </>
  )
}

export default TermsOfServiceComponent