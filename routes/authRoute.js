import express from 'express';
import {registerSignUp} from '../controllers/userControllers.js'

const router = express.Router()

router.post('/sign-up', registerSignUp )


export default router