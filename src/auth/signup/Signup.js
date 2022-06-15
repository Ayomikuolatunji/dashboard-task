import React, { useState } from 'react'
import SignupWrapper from '../SignupWrapper';

const Signup = () => {
    const [formStep, setFormStep] = useState(0);
    
 const nextFormStep = () => setFormStep((currentStep) => currentStep + 1)

 const prevFormStep = () => setFormStep((currentStep) => currentStep - 1)
  return (
        <SignupWrapper>
              
        </SignupWrapper>
  )
}

export default Signup