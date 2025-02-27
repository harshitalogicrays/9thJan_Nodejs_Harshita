import express from "express";
import { createUser, deleteUserById, getAllUsers, getCurrentUserProfile, getUserById, loginUser, logoutCurrentUser, updateCurrentUserProfile, updateUserById } from "../controllers/userController.js";
import { authenticate, authorizedAdmin } from "../middleware/auth.js";
const router = express.Router()

//http://localhost:1000/users
router.route('/').post(createUser)
                 .get(authenticate,authorizedAdmin, getAllUsers)

router.post('/auth',loginUser)
router.post('/logout',logoutCurrentUser)

router.route('/profile').get(authenticate ,getCurrentUserProfile)
                        .put(authenticate,updateCurrentUserProfile)
//Admin Routes
router.route("/:id").delete(authenticate,authorizedAdmin, deleteUserById)
                    .get(authenticate,authorizedAdmin,getUserById)
                    .put(authenticate,authorizedAdmin,updateUserById)

export default router