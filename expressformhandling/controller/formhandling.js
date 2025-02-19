export const displayForm = (req,res)=>{
    res.render('formhandling')
}

export const fetchFormData = (req,res)=>{
    // res.send(req.query)
    res.render('Displayformdata',{data:req.query})
}
export const displaypostForm = (req,res)=>{
    res.render('postform')
}

export const postformdata = (req,res)=>{
    // res.send(req.body)
    res.render('Displayformdata',{data:{...req.body}})
}