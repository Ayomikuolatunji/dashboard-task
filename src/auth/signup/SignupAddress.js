import React from 'react'
import { Link } from 'react-router-dom'
import FormLogic from '../../helpers/FormLogic'
import Logo from "../../assets/LOGO.png"
import BusinessInfo from './BusinessInfo'
import ContactInformation from './ContactInformation'
import { useDispatch } from 'react-redux'
import { getSignupData } from '../../redux/sigup-slice/signupSlice'




const SignupAddress = ({formStep,submitForm}) => {
  const dispatch = useDispatch()
   const {form,handleChange}=FormLogic() 

    
   const handleNext = (e) => {
      // check if house_number, street, city, state, contact_name, contact_phone, contact_email are empty
      if(form.house_number === "" || form.street === "" || form.city === "" || form.state === "" || form.contact_name === "" || form.contact_phone === "" || form.contact_email === ""){
        alert("Please fill all the fields")
      }
      e.preventDefault()
      if(formStep === 2){
        dispatch(getSignupData({
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
            <form action="POST">
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
            </form>
        </div>
    </div>
     </div>
    </div>
  )
}

export default SignupAddress