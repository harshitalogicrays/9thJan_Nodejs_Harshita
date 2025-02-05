import express from 'express'
import 'dotenv/config'
const PORT = process.env.PORT || 2000
const server = express()
// => base url - / (http://localhost:1000)
server.get('/',(req,res)=>{
    res.send("Hello from express server")
})

server.get('/course',(req,res)=>{
    res.send("course url")
})

server.get('/course/:name',(req,res)=>{console.log(req.params)
    // res.send(`course name : ${req.params.name}`)
    // res.json({message:"JSON format data"})
    // res.status(201).send(`course name : ${req.params.name}`)
    // res.sendStatus(200)
    res.setHeader('content-type','application/json')
    res.json({message:"JSON format data"})
})

server.get('/product',(req,res)=>{ //http://localhost:1000/product?name=eee&price=11 
    res.send(`Products Page ${JSON.stringify(req.query)}`)
})

server.post('/',(req,res)=>{
    res.send(`post request done ${JSON.stringify(req.body)}`)
})

server.listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`))