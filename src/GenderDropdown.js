import React, {useState, useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { AppContext } from './context'

const GenderDropdown = () => {
  const {selectedGender, setSelectedGender, spanish, english} = useContext(AppContext)
  const [isActive, setIsActive] = useState(false)
  const options = ['Male', 'Female']
  const spanishOptions = ['Masculino', 'Femenino']

  return (
    <div className='dropdown'>
      <h1 className='dropdown-header header-label'>{english && 'Gender'}{spanish && 'El Género'}</h1>
        <div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>{selectedGender}
          <span>
            <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          </span>
        </div>
        {isActive && english && (
          <div className='dropdown-content dropdown-height'>
              {
                options.map((option, index) => {
                  return (
                      <div 
                        key={index} 
                        className='dropdown-item' 
                        onClick={() => {
                          setSelectedGender(option)
                          setIsActive(false)
                          }
                        }
                      >
                        {option}
                      </div>
                  )
                })
              }

          </div>
        )}
        {isActive && spanish && (
          <div className='dropdown-content dropdown-height'>
              {
                spanishOptions.map((option, index) => {
                  return (
                      <div 
                        key={index} 
                        className='dropdown-item' 
                        onClick={() => {
                          setSelectedGender(option)
                          setIsActive(false)
                          }
                        }
                      >
                        {option}
                      </div>
                  )
                })
              }

          </div>
        )}


    </div>
  )
}

export default GenderDropdown