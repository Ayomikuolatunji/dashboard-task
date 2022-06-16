import React from 'react'

const Header = () => {
  return (
    <div className='flex p-8 bg-red-500 border-b-2 w-[100%] border-b-gray-100'>
        <div className="left-content flex items-center">
            <h1>Verifiers</h1>
            <span className='bg-[#d4e4ee] p-1 ml-3 rounded-[100%] text-[12px] text-white'>
                11
            </span>
        </div>
    </div>
  )
}

export default Header