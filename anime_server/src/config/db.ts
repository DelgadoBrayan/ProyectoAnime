import mongoose from "mongoose";

const connectionDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("connect successfely")
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectionDB;