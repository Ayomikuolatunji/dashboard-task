import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/LOGO.png"
import { sideBarItems } from '../../helpers/sidebarItems'

const Sidebar = () => {
  return (
    <div className='w-[20%] h-[100vh] bg-[#FFFFFF] shadow-sidebar-Shadow border-r-gray-100 border-r-4'>
        <div className="logo p-4 flex justify-center">
            <img src={Logo} 
            alt="logo"
            />
        </div>
        {/* sidebar items */}
        <div className="sidebar-items p-4">
            {
                sideBarItems.map((item, index) => {
                    return (
                        <Link to={item.path} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        key={index}>
                            <span >
                                {item.icon}
                            </span>
                            <span className="sidebar-item-name p-2">
                                {item.name} 
                            </span>
                        </Link>  
                    )
                })
            }
        </div>
    </div>
  )
}

export default Sidebar