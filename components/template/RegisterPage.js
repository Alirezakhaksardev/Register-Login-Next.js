import React from 'react'
import FormInput from 'components/module/FormInput'
import RedDiv from 'components/module/RedDiv'


function RegisterPage({formData , isChecked , handleCheckboxChange , handleChange , handleSubmit}) {

    return (
    <>
        <div className="w-screen min-h-screen bg-stone-100 relative">
            <div className="bg-white text-red-500 md:rounded-lg shadow-xl flex flex-col md:flex-row rtl form-box overflow-auto absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4" >
                {/* RED div */}
                <RedDiv />

                {/* WHITE div */}
                <div className="w-full md:w-3/5 height500 bg-white md:rounded-tl-lg rounded-bl-lg flex flex-col md:justify-center">
                    
                    <FormInput type="title" redTitile="حساب کاربری خود را" blackTitle="ایجاد کنید" />

                    <form className="font-bold" onSubmit={handleSubmit}>
                    
                        <FormInput name="fullName" type="text" value={formData.fullName} placeholder="نام و نام خانوادگی *" onChange={handleChange} />
                        <FormInput name="email" type="text" value={formData.email} placeholder="ایمیل *" onChange={handleChange} />
                        <FormInput name="password" type="password" value={formData.password} placeholder="پسورد *" onChange={handleChange} />
                        
                        <FormInput name="password" type="checkbox"  onChange={handleCheckboxChange} checked={isChecked} label="با تمامی شرایط و قوانین موافقم"  />
                        <FormInput type="submit" label="ثبت نام" />

                    </form>
                    <FormInput type="redirecttLink" QTitle="حساب کاربری دارید؟" Ltitle="وارد شوید" Rlink={"/login"} />
                    
                </div>

            </div>
        </div>
    </>
  )
}

export default RegisterPage