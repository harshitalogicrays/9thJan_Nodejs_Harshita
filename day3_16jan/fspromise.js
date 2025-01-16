import fs from  'fs/promises'

// fs.readFile("file11.txt","utf-8")
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>console.log(err))

try{
    let res  = await fs.readFile("file1.txt","utf-8")
    console.log(res)
    await fs.copyFile("fsmodule.js", './try/newfile.txt')
    console.log("file copied")
}
catch(err){console.log(err.message)}