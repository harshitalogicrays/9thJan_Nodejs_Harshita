import express from "express";
import { createUser, deleteUserById, getAllUsers, getCurrentUserProfile, getUserById, loginUser, logoutCurrentUser, updateCurrentUserProfile, updateUserById } from "../controllers/userController";
const router = express.Router()

//http://localhost:1000/users
router.route('/').post(createUser)
                 .get(getAllUsers)

router.post('/auth',loginUser)
router.post('/logout',logoutCurrentUser)

router.route('/profile').get(getCurrentUserProfile)
                        .put(updateCurrentUserProfile)
//Admin Routes
router.route("/:id").delete(deleteUserById)
                    .get(getUserById)
                    .put(updateUserById)

export default router