import createJWT from '../helpers/createJWT.js'
import usersModel from '../models/usersModel.js'



const registerSignUp = async (req, res) => {

    const { email} = req.body

    const userExists = await usersModel.findOne({ email })

    if(userExists) {

        const error = new Error("the email already exists")

        return res.status(400).json({msg: error.message}) 
    }


    try {

        const users = new usersModel(req.body)

        const userSave = await users.save()


        res.json(userSave)

        
    } catch (error) {
        
        console.log(error)

    }


}



const loginUser = async(req, res) => {

    const { email, password } = req.body

    const user = await usersModel.findOne({ email})

    if(!user){
        const error = new Error("the email dont exist")

        return res.status(400).json({msg: error.message}) 
    }

    if(await user.checkPassword(password)){

        res.json({
            name: user.name,
            email: user.email,
            token: createJWT(user._id)
        })

    }
    else{
        const error = new Error("La contraseña o el Usuario es incorrecto")

        return res.status(403).json({msg: error.message})
    }

}











export {
    registerSignUp,
    loginUser,
}