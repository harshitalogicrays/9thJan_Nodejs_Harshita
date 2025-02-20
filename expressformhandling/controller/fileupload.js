import multer from 'multer';
import path from 'path'

export const getform = (req,res)=>{res.render('FileUpload')}

const storage = multer.diskStorage({
    destination:'./public/uploads',
    filename:(req,file,cb)=>{
        cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
})

let checkfiletype = (file,cb)=>{
    const filetypes= /jpg|jpeg|png|gif|jfif|webp/
    const ext = filetypes.test(path.extname(file.originalname.toLowerCase()))
    const mimetype= filetypes.test(file.mimetype)
        if(mimetype && ext){
            return cb(null,true)
        }
        else return cb("Error:image only")
}


// const upload = multer({ storage: storage ,
//     limits:{fileSize:1024*1024}
// }).single('image')

// export const uploadfile = (req,res)=>{
//     upload(req,res,(err)=>{
//         if(err){
//             res.render('FileUpload',{err:err})
//         }
//         else if(req.file == undefined){
//             res.render('FileUpload',{err:"Error:Please choose file"})
//         }
//         else {
//             res.render('FileUpload',{
//                 err:'',
//                 msg:'file uplaoded',
//                 file:`uploads/${req.file.filename}`
//             })
//         }
//     })
// }

const upload = multer({ storage: storage ,
    limits:{fileSize:1024*1024},
    fileFilter :(req,file,cb)=>{
        checkfiletype(file,cb)
    }
}).array('images',5)

export const uploadfile = (req,res)=>{
    upload(req,res,(err)=>{
        if(err){
        if(err instanceof multer.MulterError){
            res.render('FileUpload',{err:"Error: File Size Exceeded"})}
            else 
            res.render('FileUpload',{err:err})
        }
        else if(req.files == undefined || req.files.length==0){
            res.render('FileUpload',{err:"Error:Please choose file"})
        }
        else {
            const files = req.files.map((file)=>`uploads/${file.filename}`)
            res.render('FileUpload',{
                err:'',
                msg:'file uplaoded',
                files:files
            })
        }
    })
}