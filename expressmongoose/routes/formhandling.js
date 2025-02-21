import express from 'express'
import { deleteData, displayFormData, displaypostForm , editData, postformdata, updateData } from '../controller/formhandling.js';
const router = express.Router();

//http://localhost:1000/form

router.get('/postform',displaypostForm);
router.post('/post/submit',postformdata)
router.get('/display',displayFormData);
router.get('/delete/:id',deleteData);
router.get('/edit/:id',editData);
router.post('/update/:id',updateData);


export default router
