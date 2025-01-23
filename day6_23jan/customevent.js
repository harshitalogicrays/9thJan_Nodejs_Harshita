import events from 'events'
let em = new events.EventEmitter()

em.on("clickme",()=>{
    console.log("user called clickme event")
})

em.on("userlogin",(username,password)=>{   
    if(username && password)
        console.log(`${username} loggedIn`)
    else 
    console.log(`Invalid credentials`)
})

em.on("userlogin1",(username,password)=>{   
    if(username && password)
        console.log(`${username} loggedIn`)
    else 
    throw new Error("something went wrong")
})

// em.emit("clickme") //event fire -> function call 
// em.emit("clickme") 

export default em