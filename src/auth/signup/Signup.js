import axios from 'axios';
import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux';
import SignupAddress  from './SignupAddress';
import SignupInformation from './SignupInformation';
import SignupWrapper from './SignupWrapper';

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
           }
      } catch (error) {
            // console.log( error data)
            console.log(error.response.data)
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
                        submitForm={submitForm}
                   />)
               }
        </SignupWrapper>
  )
}

export default Signup