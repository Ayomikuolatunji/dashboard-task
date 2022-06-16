import axios from 'axios';
import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import SignupAddress  from './SignupAddress';
import SignupInformation from './SignupInformation';
import SignupWrapper from './SignupWrapper';
import Logo from "../../assets/LOGO.png"

const Signup = () => {
    const [formStep, setFormStep] = useState(1);
    const signupData =useSelector(state=>state.signupData.signupData)
    console.log(signupData)

    
   const nextFormStep = () => setFormStep((currentStep) => currentStep + 1)

//    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1)
   

   const submitForm =useCallback(async()=>{
      try {
            const response=await axios.post("/signup",{
                  business_name:signupData.business_name,
                  business_email:signupData.business_email,
                  business_category:signupData.business_category,
                  business_phone:signupData.business_phone,
                  account_name:signupData.account_name,
                  house_number:signupData.house_number,
                  street:signupData.street,
                  city:signupData.city,
                  state:signupData.state,
                  contact_name:signupData.contact_name,
                  contact_phone:signupData.contact_phone,
                  contact_email:signupData.contact_email
           })
           if(response.status===200){
               console.log("success")
               console.log(response.data)
            // redirect to login page
              window.location.href = '/';    
           }
      } catch (error) {
            // console.log( error data)
            console.log(error.response.data)
      }
     
   },[signupData])
  return (
        <div className='bg-[#E5E5E5] h-[auto] w-full flex justify-center'>
    <div className='sm:w-[80%] w-full mx-auto'>
    <div className="header sm:pt-16 pt-10 sm:px-0 px-4 flex justify-between items-center">
            <div className="title">
                <img src={Logo} alt="logo" 
                  className='sm:w-[100px] w-[100px]'
                />
            </div>
            <div className="right-bar flex items-center">
                <div>
                    <span className='text-[#606060] font-[inter]'>
                      Already have an account?
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


             <SignupWrapper>
               {
                  formStep === 1 && 
                  (<SignupInformation 
                        formStep={formStep}
                        nextFormStep={nextFormStep} 
                  />)
               }
               {
                  formStep ===2 &&
                   (<SignupAddress 
                        formStep={formStep}
                        nextFormStep={nextFormStep} 
                        submitForm={submitForm}
                   />)
               }
        </SignupWrapper>
     </div>
    </div>

  )
}

export default Signup