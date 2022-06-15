import axios from 'axios'
import React, { useCallback } from 'react'
import {FiEye} from "react-icons/fi"
import FormLogic from '../helpers/FormLogic'




const Login = () => {
   const {form,handleChange}=FormLogic() 
//    const [passwordVisible, setPasswordVisible] = React.useState(false)
    

   const loginSubmitBtn=useCallback(e=>{
        e.preventDefault()
        axios.post('/login',{
            email:form.email,
            password:form.password
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
        
   },[form])


  return (
    <div className='bg-[#E5E5E5] w-full h-screen flex justify-center items-center'>
        {/* form inner container */}
        <div className='bg-[#FFFFFF] rounded-[8px]  sm:max-w-md w-[90%] p-5'>
            {/* form header */}
            <div className='block h-auto mt-9 mb-12'>
                <h2 className='text-[#039BF0] font-[500] text-[24px] leading-[29px] font-[inter]'>Welcome Back!</h2>
                <p className='text-[#606060] text-[14px] mt-2 font-[400] font-[inter]'>
                    Sign in to your Xpress reward partner's dashboard
                </p>
            </div>
            {/* form body */}
            <form action="POST" onSubmit={loginSubmitBtn}>
                {/* email */}
                <div className='mb-6'>
                    <label htmlFor='email' className='text-sm text-[#1A1619]'>
                        Email Address
                    </label>
                    <input
                        type='email'
                        id='email'
                        className='w-full p-2 border border-gray-200 rounded-[5px] bg-[#FFFFFF] mt-3'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                {/* password */}
                <div className='relative'>
                    <label htmlFor='password' className='text-sm text-[#1A1619]'>
                        Password
                    </label>
                    <input
                        type='password'
                        id='password'
                        className='w-full p-2 border border-gray-200 rounded-[5px] bg-[#FFFFFF] mt-3'
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                    />
                     {/* eye icons */}
                     <FiEye className='absolute top-[60%] text-xl z-50 right-[10px] cursor-pointer'/>
                </div>
                <div className="submit-btn mt-6">
                    <button 
                    className='w-full p-2 border border-gray-200 rounded-[5px] bg-[#039BF0] mt-3 text-[#FFFFFF] font-[Rubik] shadow-login-btn-shadow
                     py-[16px]'
                     type='submit'>
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login