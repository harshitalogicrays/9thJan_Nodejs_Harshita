import http from 'http'
import fs from 'fs'

http.createServer((req,res)=>{
   let rs =  fs.createReadStream("21jan.txt",'utf-8')
   let ws =  fs.createWriteStream("new2.txt")
   rs.pipe(ws)
})
   .listen(3000,()=>console.log(`server started at http://localhost:3000`))