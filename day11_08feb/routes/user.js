import express from 'express'
import { addUser, editUser, getAllUsers, getUserById, removeUser, updateUser } from '../controller/user.js'
const router = express.Router()
//http://localhost:2000/

// router.get('/',getAllUsers)
router.get('/:id',getUserById)
// router.post('/',addUser)
router.get('/edit/:id',editUser)
router.put('/update/:id',updateUser)
router.delete('/delete/:id',removeUser)

router.route('/').get(getAllUsers)
                 .post(addUser)

export default router