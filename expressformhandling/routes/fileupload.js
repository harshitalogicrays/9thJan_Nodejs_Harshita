import express from 'express'
import { getform } from '../controller/fileupload.js';
const router = express.Router();


router.get('/', getform);

export default router
