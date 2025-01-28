import {db} from './dbconnect.js'


db.connect((err)=>{
    if(err) throw err 
    let sqlquery = "delete from users where username='harshita'";
    db.query(sqlquery , (err,result)=>{
        if(err) throw err 
        console.log(result)
        db.end()
    })
})
