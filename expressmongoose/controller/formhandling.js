import Form from "../model/formModel.js"

export const displaypostForm = (req,res)=>{
    res.render('postform')
}

export const postformdata = async(req,res)=>{
    // res.send(req.body)
    // res.render('Displayformdata',{data:{...req.body}})
    try{      
        // const f1 = new Form({...req.body})
        // await f1.save();
         
        await Form.create({...req.body})
        res.render('index')
    }
    catch(err){
        res.status(400).send({
            status:"Fail",
            message:err.message
        })
    }
}

export const displayFormData = async(req,res)=>{
    try{      
        const response = await Form.find()
        res.render('Displayformdata',{title:"Users list" , data:{...response}})
    }
    catch(err){
        res.status(400).send({
            status:"Fail",
            message:err.message
        })
    }
}

export const deleteData =async(req,res)=>{
    const id = req.params.id
    try{
        await Form.findByIdAndDelete(id)
        const response = await Form.find()
        res.render('Displayformdata',{title:"Users list" , data:{...response}})
    }
    catch(err){  res.status(400).send({
        status:"Fail",
        message:err.message
    })}
}

export const editData =async(req,res)=>{
    const id = req.params.id
    try{
        const response = await Form.findById(id)
        res.render('EditForm',{title:"Update User" , data:response})
    }
    catch(err){  res.status(400).send({
        status:"Fail",
        message:err.message
    })}
}

export const updateData =async(req,res)=>{
    const id = req.params.id
    try{
        await Form.updateOne({_id:id},{$set:{...req.body}})
        const response = await Form.find()
        res.render('Displayformdata',{title:"Users list" , data:{...response}})
    }
    catch(err){  res.status(400).send({
        status:"Fail",
        message:err.message
    })}
}