import express from 'express'
import http from 'http'
import cors from 'cors'
import 'dotenv/config'
import path from 'path'
import { Server } from "socket.io";

const app = express()
const server = http.createServer(app)
const io = new Server(server);

app.use(express.json())
app.use(cors())
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname,'public')))

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("set username",(username)=>{
        if(username){
            socket.username = username
            console.log(username)
            io.emit('user connected',`${username} has joined the chat`)
        }
    })

    socket.on("chat message" , (message)=>{
        if(socket.username){
            io.emit("chat message",{username:socket.username,message:message})
        }
        else {console.log("user is not set")}
    })

    socket.on('disconnect', () => {
        if(socket.username)
            io.emit(`user disconnected ${socket.username} has left the chat`)
      });
  });
    
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

let port = process.env.PORT || 3000

server.listen(port, ()=>console.log(`server started at http://localhost:${port}`))