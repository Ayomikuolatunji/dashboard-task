import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/LOGO.png"
import { sideBarItems } from '../../helpers/sidebarItems'

const Sidebar = () => {
  return (
    <div className='w-full h-[100vh] bg-[#FFFFFF] shadow-sidebar-Shadow border-r-gray-100 border-r-4 sticky top-0 left-0 bottom-0'>
        <div className="logo p-4 flex justify-center">
            <img src={Logo} 
            alt="logo"
            className='pt-10'
            />
        </div>
        {/* sidebar items */}
        <div className="sidebar-items p-4 flex justify-center flex-col mt-10">
           <ul className='w-[80%] mx-auto flex justify-center flex-col'>
           {
                sideBarItems.map((item, index) => {
                    return (
                        <Link to={item.path} className="flex items-center pl-7 p-2 nav-items mt-3 py- ml-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-[#F2FAFF] dark:hover:bg-gray-700"
                        key={index}>
                            <span>
                                {item.icon}
                            </span>
                            <span className="sidebar-item-name p-2 text-xl">
                                {item.name} 
                            </span>
                        </Link>  
                    )
                })
            }
           </ul>
        </div>
    </div>
  )
}

export default Sidebar