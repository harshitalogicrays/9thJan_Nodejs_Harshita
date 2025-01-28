import {db} from './dbconnect.js'

let data = [["aaa","aaa@gmail.com","aaa123"], ["bbb","bbb@gmail.com","bbbbb"],   ["ccc","ccc@gmail.com","1111"],  ["ddd","ddd@gmail.com","434535"], ["eee","ee@gmail.com","eee"],]

db.connect((err)=>{
    if(err) throw err 
    /////////////insert 
    // let query = "insert into users(username,email,password)values('Ram','ram@gmail.com','123456')"
    // db.query(query , (err,result)=>{
    //     if(err) throw err 
    //     console.log(result)
    // })
    db.query("insert into users(username,email,password)values ?" ,[data] , (err,result)=>{
        if(err) throw err 
        console.log(result)
        db.end()
    })
})
