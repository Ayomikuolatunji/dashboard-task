import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import SignupAddress  from './SignupAddress';
import SignupInformation from './SignupInformation';
import SignupWrapper from './SignupWrapper';

const Signup = () => {
    const [formStep, setFormStep] = useState(1);
    const signupData =useSelector(state=>state.signupData)
    console.log(signupData)
    
   const nextFormStep = () => setFormStep((currentStep) => currentStep + 1)

   const prevFormStep = () => setFormStep((currentStep) => currentStep - 1)



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