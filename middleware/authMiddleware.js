import  jwt  from "jsonwebtoken";
import usersModel from '../models/usersModel.js'

const checkAuth = async (req, res, next) => {


    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

        // verify if authorization have Bearer Token 

        try {

            token = req.headers.authorization.split(' ')[1]

            console.log(token)

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.users = await usersModel.findById(decoded.id).select(" -password ")

            return next()
        

        } catch (error) {
            
            const err = new Error('Token invalidate')
            return res.status(403).json({msg: err.message})
        }

    }

    if(!token){

        const error = new Error('Token invalidate')
        res.status(403).json({msg: error.message})
    }
    

    next();
}


export default checkAuth


