import http from 'http'

//http://localhost:1000 => request from client(browser)
const server  = http.createServer((req,res)=>{
    res.write("Hello from Server")
    res.end()
})

let PORT = 1000
server.listen(1000 ,()=>{console.log(`server started at http://localhost:${PORT}`)})