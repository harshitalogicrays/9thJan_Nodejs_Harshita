import fs from 'fs'
import prompt from 'prompt'

prompt.start()
let filename = "file1.txt"
prompt.get(['data'],(err,result)=>{
    if(err) throw err 
   fs.appendFile(filename , "\n"+result.data , (err)=>{
       if(err) throw err
       let data1 = fs.readFileSync(filename,"utf-8")
       console.log(data1)
   })
})