var jwt = require('jsonwebtoken')

exports.tokenVerify=(req,res,next)=>{
    if(!req.headers.token){
        res.json({
            success: false,
            msg: "Please login first"
        })
    }else{
        jwt.verify(req.headers.token,req.app.get('secret'),(err, data)=>{
            if(err){
                res.json({
                    success: false
                })
            }else{
                req.decoded = data;
                next();
            }
        })
    }
}