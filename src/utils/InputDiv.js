import React from 'react'

const InputDiv = ({handleChange,value,label,name,type}) => {
  return (
    <div className='mt-6'>
        <label htmlFor="businessName" 
            className='text-sm text-[#1A1619]'>
               {label}
        </label>
        <input
            type={type}
            name={name}
            id="businessName"
            className='w-full p-4 border border-gray-200 rounded-[5px] bg-[#FFFFFF] mt-3'
            placeholder="Enter your business name"
            onChange={handleChange}
            value={value}
            />
        </div>   
  )
}

export default InputDiv