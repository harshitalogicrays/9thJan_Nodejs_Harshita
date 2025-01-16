import fs from 'fs'
//r -  read , w - write , a - append
fs.open("file1.txt","a","777",(err,id)=>{
   fs.write(id, "write using open() funtion" , null , 'utf-8' , ()=>{
    fs.close(id, ()=>console.log("file written successfully"))
   })
})