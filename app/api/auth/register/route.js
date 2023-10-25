import User from '../../../../models/User';
import { hashpassword, registerValidate } from "../../../../utils/auth";
import connectDB from "../../../../utils/connectDB";
import { NextResponse } from "next/server";


export async function POST(req){

    // Connect To DB
    try{
        await connectDB();
    }catch(err){return NextResponse.json({status:"failed" , message:"خطا در ارتباط با سرور مجددا امتحان نمایید !"})}

    const {fullName , email , password} = await req.json(); 
    
    const validateData = registerValidate({fullName , email , password})

    if(validateData.status === "error"){
        return NextResponse.json({status:"failed" , message:validateData.message})
    }
    
    const existingUser = await User.findOne({email});
    if(existingUser){
        return NextResponse.json({ status : "failed" , message:"ایمیل وارد شده قبلا ثبت شده است !" })
    }

    const hashedpassword = await hashpassword(password);

    try{
        const newUser = await User.create({fullName , email , password : hashedpassword});
        return NextResponse.json({ status : "success" , message : "کاربر با موفقیت ثیت نام شد !" , UserInfo : newUser })
    }catch(err){
        return NextResponse.json({status:"failed" , message:"مشکل در ارتباط با سرور مجددا امتحان کنید !"})
    }

}