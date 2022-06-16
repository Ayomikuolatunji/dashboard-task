import React from 'react'
import Logo from "../../assets/LOGO.png"

const Sidebar = () => {
  return (
    <div className='w-[20%] h-[100vh] bg-[#FFFFFF]'>
        <div className="logo">
            <img src={Logo} 
            alt="logo"
            />
        </div>
    </div>
  )
}

export default Sidebar