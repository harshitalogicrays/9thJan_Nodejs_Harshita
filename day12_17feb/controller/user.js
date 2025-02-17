let users =  [
    {
      "id": "f0f2",
      "username": "aaa",
      "email": "aaa@gmail.com",
      "password": "aaa123",
      "cpassword": "aaa123",
      "role": "1",
      "createdAt": "2024-06-29T04:24:05.643Z"
    },
    {
      "id": "094d",
      "username": "Admin",
      "email": "admin@gmail.com",
      "password": "admin123",
      "cpassword": "admin123",
      "role": "0",
      "createdAt": "2024-06-29T04:26:33.078Z"
    },
    {
      "id": "c08f",
      "username": "ram",
      "email": "ram@gmail.com",
      "password": "ram123",
      "cpassword": "ram123",
      "role": "1",
      "createdAt": "2024-06-29T04:26:41.177Z"
    },
    {
      "id": "9937",
      "username": "aaa",
      "email": "aaa@gmail.com",
      "password": "aaa123",
      "cpassword": "aaa123",
      "role": "1",
      "createdAt": "2024-07-06T04:08:11.521Z"
    },
    {
      "id": "728c",
      "name": "neha",
      "email": "neha@gmail.com",
      "password": "neha123",
      "confirmPassword": "neha123"
    },
    {
      "id": "b339",
      "name": "siya",
      "email": "siya@gmail.com",
      "password": "siya123",
      "confirmPassword": "siya123"
    },
    {
      "id": "016e",
      "name": "yogendra",
      "email": "yogendra@gmail.com",
      "password": "yogi123",
      "confirmPassword": "yogi123"
    }
  ]

export const getAllUsers =  (req,res)=>{
  // console.log(req.query)
  if(Object.keys(req.query).length !=0){
    let keys = Object.keys(req.query) //[username,role]
    let values= Object.values(req.query)///["aaa",1]
    // console.log(keys);console.log(values);
    let filterusers = users.filter(item => item[keys[0]]== values[0])
    res.send(filterusers)
  }
  else res.send(users)
}
export const getUserById =  (req,res)=>{
    // res.send(`user by id ${JSON.stringify(req.params)}`)
    const user = users.find(item=>item.id == req.params.id)
    // res.status(200).send(user)
    if(user) res.send(user)
    else res.status(404).json({message:"not found"})
}
export const addUser =  (req,res)=>{
    // console.log(req.body)
    let obj={id:Date.now(),...req.body,createdAt:new Date()}
    users.push(obj)
    res.status(200).send({"msg":"user added"})
}

export const removeUser =  (req,res)=>{
    let id = req.params.id
    const itemIndex = users.findIndex(item=>item.id==id)
    if(itemIndex == -1){res.status(404).send("bad request")}
    else {
        users.splice(itemIndex,1)
        res.status(200).json({"msg":"user deleted"})
    }
}


export const updateUser =  (req,res)=>{
  let id = req.params.id
  const itemIndex = users.findIndex(item=>item.id==id)
  if(itemIndex != -1){
    users[itemIndex] = {...users[itemIndex],...req.body}
    res.status(200).json({"msg":"user updated"})
  }
  else {
    res.status(404).send("bad request")
  }
}