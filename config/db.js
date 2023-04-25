const mongoose = require('mongoose');
const config =require('config');

require("dotenv").config()
const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO,{
            useNewUrlparser:true,
            /* userCreateIndex :true  discontinued from mongoose v 6 */

        });
        console.log('mongoDB connected');


    } catch (err){
        console.error(err.message);
        process.exit(1);
    }
};


module.exports = connectDB ;