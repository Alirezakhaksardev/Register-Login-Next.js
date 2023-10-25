import React from 'react'
import FormInput from '../module/FormInput'
import RedDiv from '../module/RedDiv'


function loginPage({formData , handleChange , handleSubmit}) {

    return (
    <>
        <div className="w-screen min-h-screen bg-stone-100 relative">
            <div className="bg-white text-red-500 md:rounded-lg shadow-xl flex flex-col md:flex-row rtl form-box overflow-auto absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4" >
                {/* RED div */}
                <RedDiv />

                {/* WHITE div */}
                <div className="w-full md:w-3/5 height500 bg-white md:rounded-tl-lg rounded-bl-lg flex flex-col md:justify-center">
                    
                    <FormInput type="title" redTitile="وارد حساب خود" blackTitle="شوید" />

                    <form className="font-bold" onSubmit={handleSubmit}>
                    
                        <FormInput name="email" type="email" value={formData.email} placeholder="ایمیل *" onChange={handleChange}  />
                        <FormInput name="password" type="password" value={formData.password} placeholder="پسورد *" onChange={handleChange} />
                        
                        <FormInput type="submit" label="ورود" />

                    </form>
                    <FormInput type="redirecttLink" QTitle="حساب کاربری ندارید؟" Ltitle="ایجاد کنید" Rlink={"/register"} />
                    
                </div>

            </div>
        </div>
    </>
  )
}

export default loginPage