
export const getProducts = (req,res)=>{
    res.send("products page") }

export const getproductname = (req,res)=>{
    res.send(`products page ${req.params.name}`)}