var dbTask = require('../models/todo')
exports.createTodo = (req,res,next)=>{
 if(!req.body.descriptions){
        res.json({
            success: false,
            msg: "Please provide all details"
        })
    }else{
        var newTask = new dbTask({
            title: req.body.title
        })
        newTask.save((err, data)=>{
            if(err){
                next();
            }else{
                res.json({
                    success: true,
                    msg: "Task created"
                })
            }
        })
    }
}