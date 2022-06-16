import React from 'react'
import InputDiv from '../../utils/InputDiv'

const ContactInformation = ({form,handleChange}) => {
  return (
    <div className='w-full'>
       <InputDiv
          label={"Contact_name"}
          name={"contact_name"}
          value={form.contact_name}
          handleChange={handleChange}          
       />
       <InputDiv 
          label={"Contact Phone"}
          name={"contact_phone"}
          value={form.contact_phone}
          handleChange={handleChange}
        />
        <InputDiv
          label={"Contact Email"}
          name={"contact_email"}
          value={form.contact_email}
          handleChange={handleChange}
         />
    </div>
  )
}

export default ContactInformation