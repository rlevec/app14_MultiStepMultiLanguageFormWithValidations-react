import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'

const GenderDropdown = ({selected, setSelected}) => {
  const [isActive, setIsActive] = useState(false)
  const options = ['Male', 'Female', 'Other']

  return (
    <div className='dropdown'>
      <h1 className='dropdown-header header-label'>Gender</h1>
        <div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>{selected}
          <span>
            <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          </span>
        </div>
        {isActive && (
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

    </div>
  )
}

export default GenderDropdown