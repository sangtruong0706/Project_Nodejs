import bcrypt from "bcryptjs";
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await bcrypt.hash(data.password, salt);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender ==='1' ? true : false,
        roleId: data.roleId

    });
        resolve('create success');
    } catch (error) {
        reject(error);
    }
  });
};

let getAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = db.User.findAll({
        raw: true,
      });
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
}

let getUserInfoById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userId = await db.User.findOne({
        raw: true,
        where: {id: id}
      })
      if(userId) {
        resolve(userId);
      }else{
        resolve({})
      }
    } catch (error) {
      reject(error);
    }
  })
}
let updateUserData = (data) => {
  return new Promise(async(resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: {id: data.id}
      })
      if(user){
        user.firstName = data.firstName,
        user.lastName = data.lastName,
        user.address = data.address
        await user.save();
        resolve();
      }else{
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  })
}

let deleteUser = (id)=>{
  return new Promise(async(resolve, reject)=>{
    try {
      await db.User.destroy({
        where: {
          id: id
        },
      });
      resolve();
    } catch (error) {
      reject(error);
    }
  })
}
module.exports = {
  createNewUser: createNewUser,
  getAllUsers: getAllUsers,
  getUserInfoById:getUserInfoById,
  updateUserData: updateUserData,
  deleteUser: deleteUser
};
