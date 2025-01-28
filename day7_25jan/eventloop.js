import fs from 'fs'
console.log("first")

fs.readFile("day7_25jan.txt","utf-8",(err,data)=>{ 
    if(err) throw err
    console.log("file read") })

setTimeout(() => { console.log("settimeout called")}, 0);

setImmediate(()=>console.log("setimmediate called"))

console.log("last")
process.nextTick(()=>console.log("process nexttick called"))
