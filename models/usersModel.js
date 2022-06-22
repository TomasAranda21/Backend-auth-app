import mongoose from "mongoose";

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

})


const usersModel = mongoose.model('Users', usersSchema);


export default usersModel