import mongoose from 'mongoose'

 const connectDB = async () => {


    try {
        
        await mongoose.connect(
            process.env.MONGODB, {

                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )


    } catch (error) {

        console.log(error)
        process.exit(1)
    }

}

export default connectDB