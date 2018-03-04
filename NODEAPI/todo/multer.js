var express = require('express')
var app = express();
var fs=require('fs')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var multer = require('multer')

var upload = multer({
    dest: 'uploads/'
})

app.post('/image', upload.single('image'), (req,res)=>{
    if(!req.file){
        res.json({
            success: false,
            msg: "Nothing to upload"
        })
    }else{
        res.json({
            success: true
        })
    }
})

app.get('/download', (req,res)=>{
    var path = __dirname+'/uploads/8bfa9cc5287d85f728c4b03297ca7c80'
    res.writeHead(200,{
        'Content-type': 'image/jpeg'
    })
    fs.createReadStream(path).pipe(res)
})


app.listen(5000,()=>{
    console.log("Server started at 5000")
})