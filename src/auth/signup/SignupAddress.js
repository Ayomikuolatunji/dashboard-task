import React, { useState } from 'react'
import FormLogic from '../../helpers/FormLogic'
import BusinessInfo from './BusinessInfo'
import ContactInformation from './ContactInformation'
import { useDispatch } from 'react-redux'
import { getSignupData } from '../../redux/sigup-slice/signupSlice'
import InputDiv from '../../utils/InputDiv'
import { FiEye } from 'react-icons/fi'




const SignupAddress = ({formStep,submitForm}) => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const dispatch = useDispatch()
  const {form,handleChange}=FormLogic() 

    
   const handleNext = (e) => {
    e.preventDefault()
      // check if house_number, street, city, state, contact_name, contact_phone, contact_email are empty
      if(form.house_number === "" || form.street === "" || form.city === "" || form.state === "" || form.contact_name === "" || form.contact_phone === "" || form.contact_email === ""){
        alert("Please fill all the fields")
      }
      //  check if password and confirm password are equal
      if(form.password !== form.confirm_password){
        alert("Password and confirm password are not equal")
      }
      if(formStep === 2){
        dispatch(getSignupData({
            password:form.password,
            house_number:form.house_number,
            street:form.street,
            city:form.city,
            state:form.state,
            contact_name:form.contact_name,
            contact_phone:form.contact_phone,
            contact_email:form.contact_email
        }))
      }
      // submit form
      submitForm()
   }


  return (
  
      <div className='flex justify-center items-center w-full mt-24 mb-12'>

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

            <div className="title text-[#039BF0] font-[500] text-[24px] leading-[29px] font-[inter] mb-[16px]">
                <h1>
                  Business Address
                </h1>
            </div>

            {/* form body */}
            <div className='form-container'>
                {/* house number and street*/}
                 <BusinessInfo form={form} handleChange={handleChange}/>

                  <div className="title text-[#039BF0] font-[500] text-[24px] leading-[29px] font-[inter] mb-[10px] mt-10">
                        <h1>
                          Business Address
                        </h1>
                  </div>

                 {/* contact information */}
                 <ContactInformation
                   form={form}
                   handleChange={handleChange}
                 />

                {/* password */}

                <div className="title text-[#039BF0] font-[500] text-[24px] leading-[29px] font-[inter] mb-[10px] mt-10">
                        <h1>
                            Password
                        </h1>
                  </div>

                  {/* main password */}
                 <div className='relative'>

                    <InputDiv
                        label="Password"
                        name="password"
                        type="password"
                        handleChange={handleChange}
                        value={form.password}
                      />
                    {/* eye icons */}
                    <FiEye 
                        className='absolute top-[60%] text-xl z-50 right-[10px]'
                            onClick={()=>setPasswordVisible(!passwordVisible)}
                      />

                 </div>
                   {/* main password */}
                <div className='relative mt-3'>
                      <label htmlFor='password' className='text-sm text-[#1A1619]'>
                          Confirm Password
                      </label>
                      <input
                          className='w-full p-4 border border-gray-200 rounded-[5px] bg-[#FFFFFF] mt-3'
                          name="confirm_password"
                          type={passwordVisible ? 'text' : 'password'}
                          onChange={handleChange}
                          value={form.confirm_password}
                        />
                      {/* eye icons */}
                      <FiEye 
                          className='absolute top-[60%] text-xl z-50 right-[10px]'
                              onClick={()=>setPasswordVisible(!passwordVisible)}
                        />
                        
                  </div>

                <div className="submit-btn mt-6 w-full flex items-center">
                    <button 
                    className='px-8 border border-gray-200 rounded-[5px] bg-[#039BF0] mt-3 text-[#FFFFFF] font-[Rubik] shadow-login-btn-shadow
                     py-[10px] w-[200px] text-2xl'
                     type='submit'
                      onClick={handleNext}
                     >
                        Submit
                    </button>
                    <p className='ml-2'>
                       Step  {formStep} of 2
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignupAddress