const userModel = require('../model/usersModel')

const userData = async ()=>{
    const data = await userModel.find({})
    return data
}
module.exports = {userData}





