import http from 'http'
import {fact} from './functions.js'
import 'dotenv/config'


let server = http.createServer((req,res)=>{
    // res.setHeader('content-type','text/html')
    // res.statusCode = "201"
    res.writeHead(200, {'content-type':"text/html"})
    res.write("hello from nodejs")
    res.write(`<h2>Factorial of 5 is ${fact(5).toString()}</h2>`)
    res.write("<b>10</b>")
    res.end()
})

let PORT = process.env.PORT || 1000
server.listen(PORT, ()=>{
    console.log(`server started at http://localhost:${PORT}`)
})