import http from 'http'
import fs from 'fs'

http.createServer((req,res)=>{
   let rs =  fs.createReadStream("21jan.txt",'utf-8')
   let ws =  fs.createWriteStream("new1.txt")
   rs.on("data",(chunk)=>{ws.write(chunk); ws.end()})
   ws.on("finish",()=>{console.log("file written successfully")})
   rs.on("end",()=>res.end("file written successfully"))
})
   .listen(3000,()=>console.log(`server started at http://localhost:3000`))