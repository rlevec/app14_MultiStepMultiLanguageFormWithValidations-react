import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'

const GenderDropdown = ({selected, setSelected, spanish, english}) => {
  const [isActive, setIsActive] = useState(false)
  const options = ['Male', 'Female']
  const spanishOptions = ['Masculino', 'Femenino']

  return (
    <div className='dropdown'>
      <h1 className='dropdown-header header-label'>{english && 'Gender'}{spanish && 'El Género'}</h1>
        <div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>{selected}
          <span>
            <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          </span>
        </div>
        {isActive && english && (
          <div className='dropdown-content'>
              {
                options.map((option, index) => {
                  return (
                      <div 
                        key={index} 
                        className='dropdown-item' 
                        onClick={() => {
                          setSelected(option)
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
          <div className='dropdown-content'>
              {
                spanishOptions.map((option, index) => {
                  return (
                      <div 
                        key={index} 
                        className='dropdown-item' 
                        onClick={() => {
                          setSelected(option)
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