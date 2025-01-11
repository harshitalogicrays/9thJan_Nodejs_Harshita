import path from 'path'
// let __dirname = path.resolve()
// console.log(__dirname)

const directory = "9thJan_Nodejs_Harshita\day2_11jan"
const file = "day2_11jan.txt"
// console.log(path.join(directory,file)) //9thJan_Nodejs_Harshitaday2_11jan\day2_11jan.txt
let mypath = path.resolve("try","abc.txt") //d:\9thJan_Nodejs_Harshita\day2_11jan\try\abc.txt
// console.log(mypath)
// console.log(path.basename(mypath)) //abc.txt
// console.log(path.dirname(mypath)) //d:\9thJan_Nodejs_Harshita\day2_11jan\try
// console.log(path.extname(mypath)) //.txt
// console.log(path.parse(mypath)) 
                            /*{
                                root: 'd:\\', dir: 'd:\\9thJan_Nodejs_Harshita\\day2_11jan\\try',
                                base: 'abc.txt', ext: '.txt', name: 'abc' } */
                            
// console.log(path.isAbsolute(mypath))
console.log(path.isAbsolute("./abc.txt"))//false  //relative path 