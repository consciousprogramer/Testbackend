const express=require('express')
const app=express()
var cors = require('cors')
const port =8080
var fs=require('fs')
var path=require('path')

app.use(cors())
app.use(express.json())

let redData=fs.readFileSync('moviesData.json')
let sendData=JSON.parse(redData);

app.get('/',(req,res)=>res.send(sendData))

app.post('/',(req,res)=>{

    console.log(req.body);
    let prevData=JSON.parse(fs.readFileSync('moviesData.json'))
    prevData.push(req.body)

    fs.writeFileSync('moviesData.json',JSON.stringify(prevData),function(err) {
        if (err) {
            throw err
        }
        console.log("Babu bhaiya hogye");
    })
    return res.send('done')

})


app.listen(port,()=>console.log("app Chalgya"))