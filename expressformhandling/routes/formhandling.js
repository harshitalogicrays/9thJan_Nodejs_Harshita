import express from 'express'
import { displayForm, displaypostForm, fetchFormData, postformdata } from '../controller/formhandling.js';
const router = express.Router();

//http://localhost:1000/form

router.get('/',displayForm);
router.get('/get/submit',fetchFormData)

router.get('/postform',displaypostForm);
router.post('/post/submit',postformdata)
export default router
