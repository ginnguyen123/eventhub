const UserModel = require('../models/user')
const bcryp = require('bcrypt')

const register = async (req, res) => {
    let {username, email, password} = req.body
    let isExistUser = await UserModel.findOne({email})
    if(isExistUser){
        throw new Error('User has already exist!')
    }

    const salt = await bcryp.genSalt(10)
    const hashPw = await bcryp.hash(password, salt)

    const newUser = new UserModel({
        username: username,
        email: email,
        password: hashPw,
    })

    await newUser.save()
    
    res.status(201).json({
        mess: "Resister new user successfully!",
        data: newUser
    })
}

module.exports = {
    register
}