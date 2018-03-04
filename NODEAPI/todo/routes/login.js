var dbLogin = require('../models/loginSchema')
var jwt = require('jsonwebtoken')

exports.login=(req,res)=>{
    if(!req.body.email|| !req.body.password){
        res.json({
            success:false,
            msg: "Please enter all details"
        })
    }else{
        dbLogin.findOne({email: req.body.email},(err, lData)=>{
            if(err){
                res.json({
                    success: false,
                    msg: "Error in databasse"
                })
            }else if(!lData){
                res.json({
                    success: false,
                    msg: "Pleasew register first"
                })
            }else if(lData.password!=req.body.password){
                res.json({
                    success: false,
                    msg: "Wrong password"
                })
            }else{
                var tokenData={
                    email: lData.email,
                    name: lData.name
                }
                var token = jwt.sign(tokenData, req.app.get('secret'))
                res.json({
                    success: true,
                    msg: "Login successfull",
                    token: token
                })
            }
        })
    }
}