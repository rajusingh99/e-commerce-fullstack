const mongoose = require("mongoose")

// const mondbUrl ="mongodb+srv://rajukumarstm1999:VIofsXmKSskySaot@cluster0.2cmnxmy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// const monDbUrl = "mongodb+srv://rajuofficialk:yhomKRntuAoXQMcI@cluster0.jnapqrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const monDbUrl = "mongodb+srv://rajuofficialk:yhomKRntuAoXQMcI@cluster0.jnapqrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDb =()=>{
    return mongoose.connect(monDbUrl)
}

module.exports ={connectDb}