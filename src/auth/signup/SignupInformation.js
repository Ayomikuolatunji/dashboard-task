import axios from 'axios'
import React, { useCallback, useState } from 'react'
import {FiEye} from "react-icons/fi"
import { Link } from 'react-router-dom'
import FormLogic from '../../helpers/FormLogic'
import Logo from "../../assets/LOGO.png"




const SignupInformation = () => {
   const {form,handleChange}=FormLogic() 
   const [loading, setLoading] = useState(false)
   const [passwordVisible, setPasswordVisible] = useState(false)
   const [error, setError] = useState('')
    

   const loginSubmitBtn=useCallback(async(e)=>{
         setLoading(true)
        e.preventDefault()
       try {
        const response=await axios.post('/login',{
            email:form.email,
            password:form.password
        })
          if(response.status===200){
            window.sessionStorage.setItem("key", response.data.token);
            setLoading(false)
            //  redirect user to homapage after successful login
            window.location.href = '/';
          }
       } catch (error) {
            setLoading(false)
            setError(error.response.data.message)
            console.log(error)
       }
        
        
   },[form])


  return (
    <div className='bg-[#E5E5E5] h-[100vh]'>
    <div className='sm:w-[80%] h-[inherent] w-full mx-auto'>
        <div className="header sm:pt-16 pt-10 sm:px-0 px-4 flex justify-between items-center">
            <div className="title">
                <img src={Logo} alt="logo" 
                  className='sm:w-[100px] w-[100px]'
                />
            </div>
            <div className="right-bar flex items-center">
                <div>
                    <span className='text-[#606060] font-[inter]'>
                      New to Xpress Rewards?
                    </span>
                </div>
                <div className="link ml-2">
                    <Link to="/register">
                        <button 
                        className='border-2 border-[#039BF0] text-[#039BF0] font-[inter] font-[700] px-3 py-2 rounded-lg  hover:bg-[#039BF0] hover:text-[#fff]'>
                          Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
         <div className='flex justify-center items-center  w-full h-[80vh]'>
        {/* form inner container */}
        <div className='bg-[#FFFFFF] rounded-[8px]  sm:max-w-lg w-[90%] p-5'>
            {/* form header */}
            <div className='block h-auto mt-9 mb-12  border-b-2 border-gray-200 pb-6'>
                <h2 className='text-[#039BF0] font-[500] text-[24px] leading-[29px] font-[inter]'>
                Welcome to Xpress Rewards
                </h2>
                <p className='text-[#606060] text-[14px] mt-2 font-[400] font-[inter]'>
                   Complete the form below to get started
                </p>
            </div>
            <div className="title text-[#039BF0] font-[500] text-[24px] leading-[29px] font-[inter]">
                <h1>
                  Business Information
                </h1>
            </div>
            {/* form body */}
            <form action="POST" onSubmit={loginSubmitBtn}>
                {/* bussiness name */}
                <div className='mt-6'>
                    <label htmlFor="businessName" 
                     className='text-sm text-[#1A1619]'
                    >
                        Business Name
                    </label>
                    <input
                        type="text"
                        name="bussiness_name"
                        id="businessName"
                        className='w-full p-2 border border-gray-200 rounded-[5px] bg-[#FFFFFF] mt-3'
                        placeholder="Enter your business name"
                        onChange={handleChange}
                        value={form.bussiness_name}
                        required
                     />
                 </div>   
               
                {/* display error */}
                {error && <div className='text-red-500 text-sm font-[400] font-[inter] mt-10'>{error}</div>}
                <div className="submit-btn mt-6">
                    <button 
                    className='w-full p-2 border border-gray-200 rounded-[5px] bg-[#039BF0] mt-3 text-[#FFFFFF] font-[Rubik] shadow-login-btn-shadow
                     py-[16px]'
                     type='submit'>
                         {
                            loading ?
                                <span>please wait..</span>
                            :
                            <span> Sign In</span>
                         }
                    </button>
                </div>
            </form>
        </div>
    </div>
     </div>
    </div>
  )
}

export default SignupInformation