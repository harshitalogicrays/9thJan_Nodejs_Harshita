let sum = (a,b)=>a+b

let fact = (num) =>{
    let f=1
    for(let i=1;i<=num;i++){
        f= f*i
    }
    return f
}

let mul = (a,b)=>a*b

module.exports = {fact,mul} //commonJS