import fs from 'fs'
import {Transform} from 'stream'

const tranforminuppercase =  new Transform({
    transform(chunk,encoding,callback){
        const modifiedData = chunk.toString().toUpperCase()
        callback(null,modifiedData) //callback(error,data)
}})

let rs = fs.createReadStream("transform.txt",'utf-8')
let ws = fs.createWriteStream("transformupper.txt")
rs.pipe(tranforminuppercase).pipe(ws)
ws.on('finish',()=>console.log("file written"))

