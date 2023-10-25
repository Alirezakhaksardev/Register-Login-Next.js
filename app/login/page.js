"use client"

import React, { useEffect } from "react";
import LoginPage from "../../components/template/LoginPage";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from "../../utils/Toast";
import { loginValidate } from "../../utils/auth";
import {signIn, useSession} from "next-auth/react"
import { useRouter } from 'next/navigation'

function Login() {
  const {status} = useSession();
  const router = useRouter()

  useEffect(() => {
    if(status === "authenticated"){
      router.replace("/dashboard")
    }
  },[status])

  // User Data
  const [formData , setFormData] = React.useState({
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
  
    const formValid = loginValidate(formData);

    if(formValid.status === "error"){
      return Toast("error" , formValid.message , 2000 , "light" )
    }

    if(formValid.status === "success"){
      const idToast = Toast("loading" , "در حال ارسال اطلاعات ...");

      const res = await signIn("credentials" , {
        email : formData.email,
        password : formData.password ,
        redirect : false
      } );

      if(!res.ok){
        return Toast("--error-after-loading" , res.error , 2000 , "light" , idToast ) 
      }
      Toast("--success-after-loading" , formValid.message , 2000 , "light" , idToast );
      return setTimeout(() => {
        router.replace("/dashboard?status:success");
    }, 1000);
       
    }

  }    


  return (
    <>
      <LoginPage formData={formData} handleChange={handleChange}  handleSubmit={handleSubmit} />
      <ToastContainer className="text-sm" rtl />
    </>

    )
}

export default Login