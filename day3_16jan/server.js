import path from 'path'
import http from 'http'
import 'dotenv/config'
import fs from 'fs'
import url from 'url'
let PORT = process.env.PORT || 1000
let filedata = fs.readFileSync("index.html","utf-8")
let aboutpage = fs.readFileSync("about.html","utf-8")
let productpage = fs.readFileSync("products.html","utf-8")
let contactpage = fs.readFileSync("contact.html","utf-8")
let server = http.createServer((req,res)=>{
    // let path = req.url
    let {pathname:path,query} = url.parse(req.url , true)
    if(path=="/" || path.toLocaleLowerCase()=='/home'){
        res.writeHead(200, {'content-type':"text/html"})
        res.end(filedata.replace('{{%CONTENT%}}',"<h1>This is my Home Page</h1>"))
    }
    else if(path=='/about'){
        res.writeHead(200, {'content-type':"text/html"})
        res.end(filedata.replace('{{%CONTENT%}}', aboutpage))
    }
    else if(path=='/products'){
        res.writeHead(200, {'content-type':"text/html"})
        res.end(filedata.replace('{{%CONTENT%}}', productpage))
    }
    else if(path=='/contact'){
        res.writeHead(200, {'content-type':"text/html"})
        res.end(filedata.replace('{{%CONTENT%}}', contactpage))
    }
   
})
 
server.listen(PORT, ()=>{
    console.log(`server started at http://localhost:${PORT}`)
}) 