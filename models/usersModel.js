import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usersSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {

        type: String,
        required: true,
        unique: true,
    },
    

    password: {
        type: String,
        required: true,

    },


    imgProfile: {

        type: String,
        required: false,
        

    }

},


    {
        timestamps : true, 
    }
)



// ====== Hash the password ====== //

usersSchema.pre('save', async function (next) { 

    if(!this.isModified("password")) { // this is for know if the password was hashed
        next()
    }

    const salt = await bcrypt.genSalt(10)

    this.password = await bcrypt.hash(this.password, salt)

});



// Check if password is correct
usersSchema.methods.checkPassword = async function(passForm){
    
    return await bcrypt.compare(passForm, this.password)
}



const usersModel = mongoose.model('Users', usersSchema);


export default usersModel