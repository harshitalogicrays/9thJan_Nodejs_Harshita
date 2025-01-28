import mysql from 'mysql2'
//default PORT no of mysql - 3306
export const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dummy'
})
// db.connect((err)=>{
//     if(err) throw err
//     console.log("connected")
// })
// db.end()