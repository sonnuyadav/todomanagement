var dbLogin = require('../models/loginSchema')

exports.registration = (req,res)=>{
    if(!req.body.name||!req.body.email||!req.body.password){
        res.json({
            success: false,
            msg: "Please enter all details"
        })
    }else{
        var newLogin = new dbLogin({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        newLogin.save((err,data)=>{
            if(err){
                res.json({
                    success: false,
                    msg: "Something went wrong"
                })
            }else{
                res.json({
                    success: true,
                    msg: "Data saved"
                })
            }
        })
    }
}