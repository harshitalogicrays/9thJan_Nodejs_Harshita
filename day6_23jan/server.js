import http from 'http'
import 'dotenv/config'
const server = http.createServer()

server.on("request",(req,res)=>{
    res.write("hello from server")
    setTimeout(()=>{
        res.end("good bye")
    },5000)
    req.on("error",(err)=>console.log(err))
    req.on("aborted",()=>console.log("aborted"))
    req.on("close",()=>console.log("client request is close"))
})
let PORT = process.env.PORT
server.listen(PORT , ()=>console.log(`server started at http://localhost:${PORT}`))