import prompt from "prompt";
import {fact} from './functions.js' 
prompt.start()

prompt.get(['num','num1'],(err,result)=>{
    if(err) console.log("error")
    else {
        console.log(fact(result.num))
        console.log(parseInt(result.num) + parseInt(result.num1))
    }
})