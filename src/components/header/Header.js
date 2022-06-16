import React from 'react'
import {BsFillBellFill} from "react-icons/bs";
import proFilePicture from "../../assets/Profile-Picture.png"
const Header = () => {
  return (
    <div className='flex p-8 bg-[#FFFFFF] border-b-2 w-[100%] border-b-gray-100  justify-between items-center top-0 left-0 right-0 sticky'>
        <div className="left-content flex items-center">
            <h1 className='text-[#1A1619] text-[24px] font-[700]'>Verifiers</h1>
            <span className='bg-[#e7f3fa] px-3 py-2 ml-3 rounded-[100%] text-[12px] text-[#039BF0] font-extrabold'>
                11
            </span>
        </div>
        <div className='flex items-center'>
            <div className="">
                  <BsFillBellFill className='mr-4 text-2xl'/>
            </div>
            <div className="profile-picture mr-3">
                <img src={proFilePicture}
                className='rounded-full w-8 h-8'
                alt='profile'
               />
            </div>

             <div className="dropdown">
                <select name="account" className='px-3 border-2 border-gray-200 bg-white py-3 ml-'>
                    <option value="">All</option>
                    <option value="">Active Verifiers</option>
                    <option value="">Pending Verifiers</option>
                    <option value="">Deactivated Verifiers</option>

                </select>
             </div>
            </div>
        </div>
  )
}

export default Header