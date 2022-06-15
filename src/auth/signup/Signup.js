import React, { useState } from 'react'
import { SignupAddress } from './SignupAddress';
import SignupInformation from './SignupInformation';
import SignupWrapper from './SignupWrapper';

const Signup = () => {
    const [formStep, setFormStep] = useState(0);
    
 const nextFormStep = () => setFormStep((currentStep) => currentStep + 1)

 const prevFormStep = () => setFormStep((currentStep) => currentStep - 1)
  return (
        <SignupWrapper>
               {
                  formStep === 0 && 
                  (<SignupInformation 
                        nextFormStep={nextFormStep} 
                  />)
               }
               {
                  formStep === 1 &&
                   (<SignupAddress 
                        nextFormStep={nextFormStep} 
                        prevFormStep={prevFormStep} 
                   />)
               }
        </SignupWrapper>
  )
}

export default Signup