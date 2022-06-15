import React from 'react'

const BusinessInfo = () => {
  return (
    <div>
         <div className='w-full flex justify-between'>
                     <div className="house-number w-[30%]">
                        <label htmlFor="house-rent">
                           House Number
                           <input 
                            type="text" 
                            className='w-full p-4 border border-gray-200 rounded-[5px] bg-[#FFFFFF] mt-3'
                           />
                        </label>
                     </div>
                     <div className="house-number w-[65%]">
                        <label htmlFor="house-rent">
                            Street
                           <input 
                             type="text" 
                             className='w-full p-4 border border-gray-200 rounded-[5px] bg-[#FFFFFF] mt-3'
                           />
                        </label>
                     </div>
                </div>
                <div className='w-full flex justify-between mt-5'>
                     <div className="house-number w-[65%]">
                        <label htmlFor="house-rent">
                            City
                           <input 
                            type="text" 
                            className='w-full p-4 border border-gray-200 rounded-[5px] bg-[#FFFFFF] mt-3'
                           />
                        </label>
                     </div>
                     <div className="house-number w-[30%] mt-4">
                        <label htmlFor="house-rent">
                            State
                        </label>
                        <select name="city" id="city" className='w-full p-4 bg-[white] border border-gray-200'>
                              <option value="lagos">lagos</option>
                              <option value="ogun">ogun</option>
                           </select>
                     </div>
                </div>
    </div>
  )
}

export default BusinessInfo