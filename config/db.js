const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected sucessfully : ${mongoose.connection.host}`)
    } catch (err) {
        console.log(`Mongodb Database Error: ${err}`);
    }
}
module.exports = connectDB;