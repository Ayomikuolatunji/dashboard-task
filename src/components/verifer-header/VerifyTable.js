/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {BsThreeDots} from "react-icons/bs"
import { tableData } from '../../helpers/tableData'




const VerifyTable = () => {


  return (
    <div className='mt-10'>
         <div className="relative overflow-x-auto shadow-xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400 border-b-2 border-t-2 border-t-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-4">
                        First Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Last Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                       Phone Number
                    </th>
                    <th scope="col" className="px-6 py-4">
                       Partner
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Location
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                    <th  scope="col" className="px-6 py-4">
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