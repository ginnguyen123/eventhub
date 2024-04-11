const UserModel = require('../models/user')
const bcryp = require('bcrypt')
const asyncHandle = require('express-async-handler')
const jwt = require('jsonwebtoken')

const genJwt = async (strPayload) =>{
    let token = await jwt.sign({ strPayload }, process.env.SECURITY_SIGNATURE, {
        expiresIn: '12h'
    })
    return token
}

const register = asyncHandle(async (req, res) => {
    let {username, email, password} = req.body
    let isExistUser = await UserModel.findOne({email})
    if(isExistUser){
        res.status(401)
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
        message: "Resister new user successfully!",
        data: {
            token: genJwt(email),
            ...newUser
        }
    })
})

module.exports = {
    register
}