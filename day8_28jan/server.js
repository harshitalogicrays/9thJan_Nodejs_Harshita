import http from 'http'
import 'dotenv/config'
const PORT  = process.env.PORT || 1000
const server = http.createServer((req,res)=>{
    res.end("hello from server")
})

server.listen(PORT , ()=>console.log(`server started at http://localhost:${PORT}`))