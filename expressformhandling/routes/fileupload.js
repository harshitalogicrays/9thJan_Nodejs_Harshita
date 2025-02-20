import express from 'express'
import { getform, uploadfile } from '../controller/fileupload.js';

const router = express.Router();
router.route('/').get(getform)
                .post(uploadfile)


export default router
