import { Schema , model , models } from "mongoose";
  
const userSchema = new Schema({
    fullName:{
        type:String,
        require:true,
    }
    ,email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    name:{
        type:String,
    },
    lastName:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:() => new Date()
    },

});

const User = models.User ||  model("User" , userSchema)

export default User;