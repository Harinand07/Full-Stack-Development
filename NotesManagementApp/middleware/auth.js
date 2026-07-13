const auth = (req,res,next)=>{
    try{
let token = req.headers.authentication.split(" ")[1]
let userid = jsonwebtoken.verify(token,'studentkey')
next()
    }catch(error){
        res.json({
            message:"MiddleWare Error",
            error
        })
    }

}
export default auth