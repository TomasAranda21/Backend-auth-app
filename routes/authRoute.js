import express from 'express';
import {registerSignUp, loginUser} from '../controllers/userControllers.js'

const router = express.Router()

router.post('/sign-up', registerSignUp )

router.post('/login', loginUser )


export default router