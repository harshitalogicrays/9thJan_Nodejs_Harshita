import express from 'express';
const router = express.Router();

/* http://localhost:1000 */
router.get('/', (req, res, next) => {
  // res.send("hello from server")
  // res.json({msg:"ertlkjekjt"})
  // res.render("index.jade",{title:"Express"})
  
  res.render("index",{title:"LRA1",address:"Ahmedabad" , isActive:true , names:["aaa","bbb","ccc","ddd"],
    fullname:{fname:"Ram",lname:"Sharma"}
  })

});

export default router