import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from 'utils/connectDB';
import {verifyPassword} from 'utils/auth';
import User from 'models/User';
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth(
    {
        session:{strategy:"jwt"},
        providers: [
            CredentialsProvider(
                {

                    async authorize(credentials , req) {
                        const {email , password} = credentials;
                        try{
                            await connectDB();
                        }catch(error){
                            throw new Error("Connection Failed");
                        }

                        if(!email || !password){
                            throw new Error("فیلد ایمیل و پسورد را پر کنید !")
                        }

                        const user = await User.findOne({email})

                        if(!user) throw new Error("ایمیل یا پسورد اشتباه است !")
                        

                        const verifyPass = await verifyPassword(password , user.password);

                        if(!verifyPass) throw new Error("ایمیل یا پسورد اشتباه است !");

                        return {email}

                    },
                } 
            ),
            
            GitHubProvider({
                clientId: process.env.GITHUB_ID,
                clientSecret: process.env.GITHUB_SECRET
            })
        ],
    }
)
export { handler as GET, handler as POST }


