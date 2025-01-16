// const myurl = new URL("http://localhost:2000")
// console.log(myurl.hostname)
// console.log(myurl.port)

import path from 'path'
import http from 'http'
import 'dotenv/config'
import fs from 'fs'
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
        res.end()
    }
    else if(req.url=='/contact'){
        res.writeHead(200, {'content-type':"text/html"})
        fs.readFile("contact.html","UTF-8",(err,data)=>{
                if(err) throw err
                res.write(data)
                res.end()
            })
            
    }
   
})


server.listen(PORT, ()=>{
    console.log(`server started at http://localhost:${PORT}`)
}) 