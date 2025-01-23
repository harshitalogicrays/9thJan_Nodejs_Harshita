//compress
// import fs from 'fs'
// import zlib from 'zlib'
// let rs = fs.createReadStream("day6_23jan.txt","utf-8")
// let ws = fs.createWriteStream("transform.txt.gz")
// rs.pipe(zlib.createGzip()).pipe(ws)
// ws.on('finish',()=>console.log("file written"))

//decompress
import fs from 'fs'
import zlib from 'zlib'
let rs = fs.createReadStream("transform.txt.gz")
let ws = fs.createWriteStream("transform.txt")
rs.pipe(zlib.createGunzip()).pipe(ws)
ws.on('finish',()=>console.log("file decommpressed"))