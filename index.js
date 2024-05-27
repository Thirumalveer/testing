const express=require("express");
const app = express();
const port=8000;
const fs= require("fs");


 app.get("/home",(req,res)=>{

//      fs.readFile('test3.txt', function(err, data) {

//       return  res.send(data)

//  })

 fs.appendFile('file1.txt', 'Hello content!', function (err) {
    if (err) 
    
    res.send(err);
    else
    res.send("success");
  });


})
app.listen(port,()=>{

    console.log(`this is the query params:http://localhost:${port}`)
})