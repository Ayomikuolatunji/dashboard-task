import { useState } from "react"




const FormLogic =()=>{
     const [form, setForm] = useState({
        email: '',
        password: '',
        confirm_password: '',
        bussiness_name: '',
        bussiness_email:'',
        bussiness_phone:'',
        bussiness_category:'',
        account_number:'',
        house_number:"",
        street:"",
        city:"",
        state:"",
        contact_name:"",
        contact_phone:"",
        contact_email:"",
     })

     const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
     return {
        form,
        handleChange
     }
}

export default FormLogic