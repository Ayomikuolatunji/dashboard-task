import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {AiOutlineCloudDownload} from "react-icons/ai"
import {FiPaperclip} from "react-icons/fi"
import FormLogic from '../../helpers/FormLogic'
import InputDiv from '../../utils/InputDiv'
import SelectDiv from '../../utils/SelectDiv'
import { getSignupData } from '../../redux/sigup-slice/signupSlice'




const SignupInformation = ({formStep,nextFormStep}) => {
  const [file,setFile]=useState(null)
  const dispatch = useDispatch()
   const {form,handleChange}=FormLogic() 


   const handleFile=(event)=>{
    setFile(event.target.files[0])
   }


    const handleNext = (e) => {
        e.preventDefault()
        // check if bussiness_name, bussiness_email, bussiness_phone, bussiness_category, account_number are empty
        if(form.bussiness_name === "" || form.bussiness_email === "" || form.bussiness_phone === "" || form.bussiness_category === "" || form.account_number === "" || file === null){
          alert("Please fill all the fields")
          return
        }
        nextFormStep()
        if(formStep === 1){
          dispatch(getSignupData({
              bussiness_name:form.bussiness_name,
              bussiness_email:form.bussiness_email,
              bussiness_phone:form.bussiness_phone,
              bussiness_category:form.bussiness_category,
              account_number:form.account_number,
              file:file
          }))
        }
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
            <div className="title text-[#039BF0] font-[500] text-[24px] leading-[29px] font-[inter]">
                <h1>
                  Business Information
                </h1>
            </div>
            {/* form body */}
            <div className='form-container'>
                {/* bussiness name */}
                <InputDiv
                    handleChange={handleChange}
                    value={form.bussiness_name}
                    label='Business Name'
                    type={'text'}
                    name='bussiness_name'
                />
                {/* business name container ends here */}
               
                {/* business email */}
                <InputDiv
                    handleChange={handleChange}
                    value={form.bussiness_email}
                    label='Business Email Address'
                    type={'email'}
                    name='bussiness_email'
                />
                {/* business email container ends here */}

                {/* business phone */}
                <InputDiv
                    handleChange={handleChange}
                    value={form.bussiness_phone}
                    label='Business Phone Number'
                    type={'phone'}
                    name='bussiness_phone'
                />
                {/* business category */}
                <SelectDiv
                    handleChange={handleChange} 
                    value={form.bussiness_category}
                    options={["Select Business",'Business A','Business B','Business C']}
                    name='bussiness_category'
                    label='Business Category'
                />
                {/* account no */}
                <InputDiv
                    handleChange={handleChange}
                    value={form.account_number}
                    label='Account No'
                    type={'number'}
                    name='account_number'
                 />
                 {/* file */}
                 <div className='border-2 mt-9 border-gray-100'>
                    <div className='w-full sm:px-16  py-10 flex justify-center flex-col items-center'>
                        <AiOutlineCloudDownload 
                          className='text-[#039BF0] text-[80px] mb-6'
                        />
                        <p className='mb-5'>
                          Drag here or click the button below to upload
                        </p>
                        <label htmlFor="fileUpload"
                           className='bg-[#039BF0] py-[4px] px-[12px] text-white mb-5 cursor-pointer'
                          >
                              <FiPaperclip className='inline text-[white]
                              mr-4'/>
                              Choose file
                              <input 
                                type="file" 
                                className='hidden'
                                id='fileUpload'
                                onChange={handleFile}
                              />
                        </label>
                        <p>
                         {file ? file.name :  "Maximum upload size: 10MB (.jpg)"}
                        </p>
                    </div>
                 </div>
                <div className="submit-btn mt-6 w-full flex items-center">
                    <button 
                    className='border border-gray-200 rounded-[5px] bg-[#039BF0] mt-3 text-[#FFFFFF] font-[Rubik] shadow-login-btn-shadow
                     py-[10px] sm:w-[200px] w-[150px] text-2xl'
                     type='submit'
                       onClick={handleNext}
                     >
                        next
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

export default SignupInformation