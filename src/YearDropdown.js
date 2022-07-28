import React, {useState, useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { AppContext } from './context'

const YearDropdown = () => {
  const {selectedYear, setSelectedYear, english, spanish} = useContext(AppContext)
  const [isActive, setIsActive] = useState(false)
  const options = ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032']

  return (
    <div className='dropdown dropdown-style'>
      <h4 className='dropdown-header header-label'>{english && 'Expiration Year'}{spanish && 'Año de Vencimiento'}</h4>
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