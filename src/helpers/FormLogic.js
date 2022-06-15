import { useState } from "react"




const FormLogic =()=>{
     const [form, setForm] = useState({
            email: '',
            password: '',
            bussiness_name: '',
            bussiness_email:'',
            bussiness_phone:'',
            bussiness_category:'',
            account_number:'',
            house_number:"",
            street:"",
            city:"",
            state:""
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