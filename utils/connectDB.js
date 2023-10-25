import mongoose from "mongoose";
export default async function connectDB(){
    try{

        if(mongoose.connections[0].readyState) return
        await mongoose.connect(process.env.MONGO_URI);
        return true

    }catch(err){
        return false
    }
}