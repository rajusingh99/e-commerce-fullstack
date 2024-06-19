const { connectDb } = require('./config/db');
const app = require('./index')

const PORT = 5454;
app.listen(PORT,( async()=>{
    await connectDb()
  console.log("e-commerce api listing on PORT",PORT)
}))