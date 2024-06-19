const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const jwtProvider = require("../config/jwtProvider");

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    const isUserExist = await User.findOne({ email: email });

    if (isUserExist) {
      throw new Error("user already exits with:", email);
    }
    password = await bcrypt.hash(password,8);

    const user = await User.create({ firstName, lastName, email, password });


    return user;
  } 
  catch (error) {
    throw new Error(error.message);
  }
};

const getUserById = async (userId) => {
  try {
    const user = await User.findByd(userId)
    // ?.populate("address");
    if (!user) {
      throw new Error("user not found with id: ", userId);
    }
    return user;
  }
   catch (error) {
    throw new Error(error.message);
  }
};
const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("user not found with email: ", email);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserProfileByToken = async(token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);

    const user = await findUserById(userId);
    if (!user) {
      throw new Error("user not found with id: ", userId);
    }
    return user;
  }
   catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    // if (!users) {
    //   throw new Error("No user found yet!", users);
    // }
    return users;
  } 
  catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  getUserProfileByToken,
  getAllUsers,
};
