const userService = require("../services/user.service");

const getUserProfile = async(req,res)=>{
    const jwt = req.headers?.authorization.split(" ")[1];
    try {
        if(!jwt){
            return res.status(404).send({error:"token not found"});
        }
        const user = userService.getUserProfileByToken(jwt);
        return res.status(200).send(user);
    } 
    catch (error) {
      return res.status(500).send({error : error.message})    
    }
}
const getAllUser= async(req,res)=>{
    try {
        const user = await userService.getAllUsers();
        return res.status(200).send(user);
    } 
    catch (error) {
      return res.status(500).send({error : error.message})    
    }
}
module.exports = {getUserProfile,getAllUser};