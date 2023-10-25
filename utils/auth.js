import { hash , compare } from "bcryptjs";

async function hashpassword(password){
    const hashedpasswored = await hash(password , 12);
    return hashedpasswored
}

async function verifyPassword(password , hashpasswored){
    const verifyPass = await compare(password , hashpasswored);
    return verifyPass;
}


function registerValidate(formData){
    if(formData.fullName.length === 0){
        return {status:"error" , message : "لطفا فیلد نام و نام خانوادگی را پر کنید !"}
    }else if(formData.email.length === 0){
        return {status:"error" , message : "لطفا فیلد ایمیل را پر کنید !"}
    }else if(formData.email){
        
        const result = String(formData.email)
            .toLowerCase()
            .match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(!result){
            return {status:"error" , message : "ایمیل وارد شده نامعتبر است !"}
        }else if(formData.password.length <= 5){
            return {status:"error" , message : "پسورد شما باید حداقل شامل 6 حرف باشد !"}
        }
    }

    return {status:"success" , message : "شما با موفقیت ثبت نام شدید !"}
    
}

function loginValidate(formData){
    if(formData.email.length === 0){
        return {status:"error" , message : "لطفا فیلد ایمیل را پر کنید !"}
    }
    const result = String(formData.email)
        .toLowerCase()
        .match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(!result){
        return {status:"error" , message : "ایمیل وارد شده نامعتبر است !"}
    }
    if(formData.password.length === 0){
        return {status:"error" , message : "لطفا فیلد پسورد را پر کنید !"}
    }
    return {status:"success" , message : "خوش آمدید... "}
}

export {hashpassword , verifyPassword , registerValidate , loginValidate}
