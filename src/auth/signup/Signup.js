import axios from 'axios';
import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux';
import SignupAddress  from './SignupAddress';
import SignupInformation from './SignupInformation';
import SignupWrapper from './SignupWrapper';

const Signup = () => {
    const [formStep, setFormStep] = useState(1);
    const signupData =useSelector(state=>state.signupData)
    console.log(signupData)

   const  {
      business_name,
      business_email,
      business_category,
      business_phone,
      account_name,
      house_number,
      street,
      city,
      state,
      contact_name,
      contact_phone,
      contact_email
  } =signupData.signupData
    
   const nextFormStep = () => setFormStep((currentStep) => currentStep + 1)

   const prevFormStep = () => setFormStep((currentStep) => currentStep - 1)
   

   const submitForm =useCallback(async()=>{
      try {
            const response=await axios.post("/signup",{
                  business_name,
                  business_email,
                  business_category,
                  business_phone,
                  account_name,
                  house_number,
                  street,
                  city,
                  state,
                  contact_name,
                  contact_phone,
                  contact_email
           })
      } catch (error) {
            
      }
     
   },[signupData])
  return (
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
                        prevFormStep={prevFormStep} 
                   />)
               }
        </SignupWrapper>
  )
}

export default Signup