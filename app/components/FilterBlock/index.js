import React, { useState, useEffect } from 'react'

import { FilterWrapper } from './style'

const FilterBlock = ({ onCheck, onCityCheck, onInput }) => {
   const [city, setCity] = useState('')
   const [inputValue, setInputValue] = useState('')
   const [isFullTime, setIsFullTime] = useState(false)

   useEffect(() => {
      onCityCheck(city)
   }, [city])

   useEffect(() => {
      onInput(inputValue)
   }, [inputValue])

   const handleChange = (e) => {
      setIsFullTime(e.target.checked)

      onCheck(e.target.checked)
   }

   const resetFields = () => {
      setCity('')
   }

   return (
      <FilterWrapper>
         <div className="form-control">
            <input
               type="checkbox"
               id="fulltime"
               value={isFullTime}
               onChange={handleChange}
            />
            <label htmlFor="fulltime">Full time</label>
         </div>

         <div className="input-wrap">
            <label htmlFor="location">Location</label>
            <input
               type="text"
               id="location"
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               placeholder="City, state, or country"
            />
            <i className="fas fa-globe-americas"></i>
         </div>

         <div className="cities">
            <div className="form-control mb-15">
               <input
                  type="radio"
                  id="london"
                  value="london"
                  checked={city === 'london'}
                  onChange={(e) => setCity(e.target.value)}
               />
               <label htmlFor="london">London</label>
            </div>

            <div className="form-control mb-15">
               <input
                  type="radio"
                  value="amsterdam"
                  id="amsterdam"
                  checked={city === 'amsterdam'}
                  onChange={(e) => setCity(e.target.value)}
               />
               <label htmlFor="amsterdam">Amsterdam</label>
            </div>

            <div className="form-control mb-15">
               <input
                  type="radio"
                  value="newYork"
                  id="newYork"
                  checked={city === 'newYork'}
                  onChange={(e) => setCity(e.target.value)}
               />
               <label htmlFor="newYork">New York</label>
            </div>

            <div className="form-control mb-15">
               <input
                  type="radio"
                  value="berlin"
                  id="berlin"
                  checked={city === 'berlin'}
                  onChange={(e) => setCity(e.target.value)}
               />
               <label htmlFor="berlin">Berlin</label>
            </div>
         </div>

         <button className="reset-btn" onClick={resetFields}>
            Reset
         </button>
      </FilterWrapper>
   )
}

export { FilterBlock }
