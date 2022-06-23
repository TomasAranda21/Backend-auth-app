import usersModel from '../models/usersModel.js'



const registerSignUp = async (req, res) => {

    const { email} = req.body

    const userExists = await usersModel.findOne({ email })

    if(userExists) {

        const error = new Error("Usuario ya registrado")

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


}











export {
    registerSignUp,
    loginUser,
}