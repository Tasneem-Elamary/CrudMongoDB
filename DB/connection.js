import mongoose from 'mongoose';



const connectDB = async () => {
    return await mongoose.connect("mongodb://localhost:27017/ass6")
        .then((result) => {
            console.log(`connected DB`);
        }).catch((err) => {
            console.log('Fail to connect DB');
        })
}


export default connectDB