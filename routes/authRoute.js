import express from 'express';
import {registerSignUp, loginUser, profileUser} from '../controllers/userControllers.js'
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router()

router.post('/sign-up', registerSignUp )

router.post('/login', loginUser )



// Private Area

router.get('/profile', checkAuth, profileUser)





export default router