import {db} from './dbconnect.js'


db.connect((err)=>{
    if(err) throw err 
    let sqlquery = "update users set password='12345678' where username='harshita'";
    db.query(sqlquery , (err,result)=>{
        if(err) throw err 
        console.log(result)
        db.query("select * from users where username='harshita'",(err,result)=>{
            if(err) throw err 
            console.log(result)
        })
        db.end()
    })
})
