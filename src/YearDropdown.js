import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'

const YearDropdown = ({selectedYear, setSelectedYear}) => {
  const [isActive, setIsActive] = useState(false)
  const options = ['22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']

  return (
    <div className='dropdown dropdown-style'>
      <h4 className='dropdown-header header-label'>EXPIRATION YY</h4>
        <div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>{selectedYear}
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
                          setSelectedYear(option)
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

export default YearDropdown