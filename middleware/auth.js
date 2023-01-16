const jwt = require("jsonwebtoken")
require("dotenv").config()


const auth=(req,res,next)=>{
    const token=req.headers?.authorization
    if(token){
        const decoded=jwt.verify(token,process.env.key)
        console.log(decoded)
        if(decoded){
            const userID=decoded.userID
            req.body.userID=userID
            next()
        }
        else{
            res.send("please login")
        }
    }
    else{
        res.send("please login")
    }
}


module.exports={auth}