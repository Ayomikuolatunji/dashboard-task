import React from 'react'

const BusinessInfo = ({form,handleChange}) => {
  return (
    <div>
         <div className='w-full flex justify-between'>
                     <div className="house-number w-[30%]">
                        <label htmlFor="house-rent">
                           House Number
                           <input 
                            type="text" 
                            className='w-full p-4 border border-gray-200 rounded-[5px] bg-[#FFFFFF] mt-3'
                            name="house_number"
                            value={form.house_number}
                            handleChange={handleChange}
                           />
                        </label>
                     </div>
                     <div className="house-number w-[65%]">
                        <label htmlFor="house-rent">
                            Street
                           <input 
                             type="text" 
                             className='w-full p-4 border border-gray-200 rounded-[5px] bg-[#FFFFFF] mt-3'
                               name="street"
                               value={form.street}
                               handleChange={handleChange}
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
                              name="city"
                              value={form.city}
                              handleChange={handleChange}
                           />
                        </label>
                     </div>
                     <div className="house-number w-[30%] mt-4">
                        <label htmlFor="house-rent">
                            State
                        </label>
                        <select id="city" className='w-full p-4 bg-[white] border border-gray-200'
                              name="state"
                              value={form.state}
                              handleChange={handleChange}
                        >
                              <option value="lagos">lagos</option>
                              <option value="ogun">ogun</option>
                           </select>
                     </div>
                </div>
    </div>
  )
}

export default BusinessInfo