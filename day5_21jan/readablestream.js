import http from 'http'
import fs from 'fs'
http.createServer((req,res)=>{
   let rs =  fs.createReadStream("largefile.txt",'utf-8')
   rs.on("data",(chunk)=>res.write(chunk))
   rs.on("error",(err)=>console.log(err.message))
   rs.on("end",()=>res.end())
})
   .listen(3000,()=>console.log(`server started at http://localhost:3000`))