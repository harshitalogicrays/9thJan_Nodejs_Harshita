// const myurl = new URL("http://localhost:2000")
// console.log(myurl.hostname)
// console.log(myurl.port)

import path from 'path'
import http from 'http'
import 'dotenv/config'

let __dirname = path.resolve()

let PORT = process.env.PORT || 1000
let server = http.createServer((req,res)=>{
    // res.write(req.url) // => / (means => http://localhost:2000/)
    let url = new URL(`http://localhost:${PORT}/req.url`)
    if(req.url=="/"){
        res.writeHead(200, {'content-type':"text/html"})
        res.write("<h1>Home Page</h1>"); res.end()
    }
    else if(req.url=="/about"){
        res.writeHead(200, {'content-type':"text/html"})
        res.write("<h1>About Page</h1>"); 
        // res.sendFile(path.join(__dirname , "index.html")) //expressjs
        res.end()
    }
   
})


server.listen(PORT, ()=>{
    console.log(`server started at http://localhost:${PORT}`)
}) 