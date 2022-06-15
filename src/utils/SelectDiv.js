import React from 'react'

const SelectDiv = ({handleChange,value,options,name}) => {
  return (
    <div className='mt-6'>
        <select
            name={name}
            value={value}
            className='w-full p-4 border border-gray-200 rounded-[5px] bg-[#FFFFFF] mt-3'
            onChange={handleChange}
        >
          {
            options.map((item,index)=>{
                return <option key={index} value={item}>{item}</option>
            })
          }
        </select>
    </div>
  )
}

export default SelectDiv