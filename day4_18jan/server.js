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

let products = fs.readFileSync("products.json","utf-8")
let productslist = JSON.parse(products)

// let result =productpage.replace("{{%TITLE%}}",productslist[0].title)

let result  = productslist.map((item)=>{
   let output  = productpage.replace("{{%TITLE%}}",item.title)
        output = output.replace("{{%PRICE%}}",item.price)
        output = output.replace("{{%IMG%}}",item.image)
        output = output.replace("{{%CATEGORY%}}",item.category)
   return output })
console.log(result)
let server = http.createServer((req,res)=>{
    // let path = req.url
    let {pathname:path,query} = url.parse(req.url , true)
    if(path=="/" || path.toLocaleLowerCase()=='/home'){
        res.writeHead(200, {'content-type':"text/html"})
        res.write(filedata.replace('{{%CONTENT%}}',"<h1>This is my Home Page</h1>"))
        res.end()
    }
    else if(path=='/about'){
        res.writeHead(200, {'content-type':"text/html"})
        res.end(filedata.replace('{{%CONTENT%}}', aboutpage))
    }
    else if(path=='/products'){
        res.writeHead(200, {'content-type':"text/html"})
        // res.end(filedata.replace('{{%CONTENT%}}', result))
        res.end(filedata.replace('{{%CONTENT%}}', result.join("")))
    }
    else if(path=='/contact'){
        res.writeHead(200, {'content-type':"text/html"})
        res.end(filedata.replace('{{%CONTENT%}}', contactpage))
    }
   
})
 
server.listen(PORT, ()=>{
    console.log(`server started at http://localhost:${PORT}`)
}) 