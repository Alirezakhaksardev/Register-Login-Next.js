"use client"

import React, { useEffect } from "react";
import RegisterPage from "components/template/RegisterPage";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from "utils/Toast";
import { registerValidate } from "utils/auth";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'


function Register() {

  const {status} = useSession();
  const router = useRouter()

  useEffect(() => {
    if(status === "authenticated"){
      router.replace("/dashboard")
    }
  },[status])

  // CheckBox
  const [isChecked, setIsChecked] = React.useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // User Data
  const [formData , setFormData] = React.useState({
    fullName : "",
    email : "",
    password : ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit Handler
  const handleSubmit = async(e) =>{
    e.preventDefault();


    const resValidate = registerValidate(formData);
  
    if(resValidate.status == "success"){
      if(!isChecked){
        return Toast("error" , "تیک با قوانین موافقید را وارد کنید !" , 4000 , "light")
      }
      const idToast = Toast("loading" , "در حال ارسال اطلاعات ...");

      const res = await fetch("/api/auth/register",{
        method:"POST",
        body : JSON.stringify(formData),
        headers : {'Content-Type': 'application/json'}
      })
      const data = await res.json();
      if(data.status === "success"){
        return Toast("--success-after-loading" , data.message , 2000 , "light" , idToast )
      }else{
        // failed
        return Toast("--error-after-loading" , data.message , 2000 , "light" , idToast )
      }
    }
    
    // errors
    Toast(resValidate.status , resValidate.message , 4000 ,  "light")

  }    


  return (
    <>
      <RegisterPage formData={formData} isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} handleChange={handleChange}  handleSubmit={handleSubmit} />
      <ToastContainer className="text-sm" rtl />
    </>

    )
}

export default Register