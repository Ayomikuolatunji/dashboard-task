/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {BsThreeDots} from "react-icons/bs"
import { tableData } from '../../helpers/tableData'




const VerifyTable = () => {


  return (
    <div className='mt-10'>
         <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        First Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Last Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                       Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                       Partner
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Location
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th  scope="col" className="px-6 py-3">
                       Actions
                    </th>
                </tr>  
        </thead>
        
            <tbody>
            {
                 tableData.map(item=>{
                     return (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                   {item.first_name}
                                </th>
                                <td className="px-6 py-4">
                                  {item.last_name}
                                </td>
                                <td className="px-6 py-4">
                                  {item.phone_number}
                                </td>
                                <td className="px-6 py-4">
                                   {item.partner}
                                </td>
                                <td className="px-6 py-4 ">
                                    {item.location}
                                </td>
                                <td className="px-6 py-4 ">
                                    <span
                                        className={`text-left
                                        ${
                                            item.status === 'Active' ? 'text-[#27A713] active-status px-3 py-2' : item.status==="Awaiting approval" ? 'text-[#FF9900] pending px-3 py-2'
                                       :item.status==="Deactivated"? "deactivate-status px-3 py-2 text-[#FF0000]":""}`}
                                    >
                                    {item.status}
                                </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <BsThreeDots className='text-gray-600 dark:text-gray-400 text-2xl'/>
                                </td>
                            </tr>
                        )
                     })
                   }
               
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default VerifyTable