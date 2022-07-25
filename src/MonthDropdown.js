import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'

const MonthDropdown = ({selectedMonth, setSelectedMonth}) => {
  const [isActive, setIsActive] = useState(false)
  const options = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

  return (
    <div className='dropdown dropdown-style'>
      <h4 className='dropdown-header header-label'>EXPIRATION MM</h4>
        <div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>{selectedMonth}
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
                          setSelectedMonth(option)
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

export default MonthDropdown