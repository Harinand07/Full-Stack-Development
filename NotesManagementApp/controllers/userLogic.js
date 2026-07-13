
import User from "../model/user.js"
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"

const signup = async (req,res)=>{
    try{
        let{name,email,password} = req.body

        if(!name || !email || !password){
            return res.status(404).json({
                success:false,
                message:"data not found for user signup"
            })
        }

        let existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(401).json({
                success:false,
                message:"user already exists with this email ID"
            })
        }

        let hashPass
        try{
            hashPass = await bcrypt.hash(password,12)
        }catch(error){
            return res.status(400).json({
                success:false,
                message:"Failed to hash password"
            })
        }

        let user = await User.create({name,email,password:hashPass})

        res.status(201).json({
            success:true,
            message:"User created successfully",
            user
        })


        const login = async (req,res)=>{
            try{
                let {email,password} = req.body

                if(!email || !password){
                    return res.status(404).json({
                        success:false,
                        message:"data not found for user login"
                    })
                }

                let user = await User.findOne({email})
                if(!user){
                    return res.status(401).json({
                        success:false,
                        message:"user not found with this email ID"
                    })
                }

                if(await bcrypt.compare(password,user.password)){
                    let token = jsonwebtoken.sign({id:user._id},'studentKey',{expiresIn:'3d'})
                    res.cookie('tokenCookie',token,{maxAge:3*24*60*60*1000}).status(200).json({
                        success:true,
                        message:"User logged in successfully",
                        token
                    })
                }
                else{
                    return res.status(401).json({
                        success:False,
                        message:"Invalid Password"
                    })
                }

            }catch(error){
                res.status(500).json({
                    success:false,
                    message:"Internal Server Error",
                    error
                })
            }
        }

    }catch(error){
        res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error
        })
    }
}

    const createNote = async (req,res)=>{
        try{
            let {heading,content} = req.body
            let userId = req.user.id

            if(!heading || !content){
                return res.status(404).json({
                    success:false,
                    message:"heading and content are required"
                })
            }

            let note = await Note.create({heading,content,user:userId})
            console.log(note)
            res.status(201).json({
                success:true,
                message:"Note created successfully",
                note
            })


        }catch(error){
            res.status(500).json({
                success:false,
                message:"Internal Server Error",
                error
            })
        }
    }


    const getNotes = async (req,res)=>{
        try{
            let userid = req.user.id
            let notes = await Note.findOne({user:userid})
            if(!notes){
                return res.status(404).json({
                    success:false,
                    message:"No notes found for this user"
                })
            }
            res.status(200).json({
                success:true,
                message:"Notes retreived successfully",
                notes
            })

        }catch(error){
            res.status(500).json({
                success:false,
                message:"Internal Server Error",
                error
            })
        }
    }
