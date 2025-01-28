import {db} from './dbconnect.js'


db.connect((err)=>{
    if(err) throw err 
    // let sqlquery = "select * from users";
    // let sqlquery = "select * from users where username='harshita'";
    // let sqlquery = "select email,id from users where username='harshita'";
    // let sqlquery = "select * from users where id=3";
    // let sqlquery = "select * from users where username like '%a%'";
    // let sqlquery = "select * from users where username like '%a%' and password='aaa123'";
    let sqlquery = "select * from users where username like '%r%' OR password='aaa1231'";
    
    db.query(sqlquery , (err,result)=>{
        if(err) throw err 
        console.log(result)
        db.end()
    })
})
