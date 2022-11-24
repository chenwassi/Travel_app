const userModel = require('../model/usersModel')

const userData = async ()=> {
    const data = await userModel.find({})
    return data
}
const addUser = async (obj)=>{
    const data = new userModel({
    firstName:obj.firstName,
    lastName:obj.lastName,
    userName:obj.userName,
    email:obj.email,
    password:obj.password
    })
    await data.save()
    return 'created!'
}
module.exports = {userData,addUser}





