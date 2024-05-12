const UserModel = require('../models/user')
const bcryp = require('bcrypt')
const asyncHandle = require('express-async-handler')
const jwt = require('jsonwebtoken')
const respCode = require('./../common/respCode')

const genJwt = async (strPayload) =>{
    let token = await jwt.sign({ strPayload }, process.env.SECURITY_SIGNATURE, {
        expiresIn: '12h'
    })
    return token
}

const handleSendMail= async (value) => {
    // value kiểu string
}

// có sử lý với fe nên sử dụng asyncHandle
const verification = asyncHandle (async(req, res) => {
    let {email} = req.body
    console.log(email);
    res.send('verification')
})

const register = asyncHandle(async (req, res) => {
    let {username, email, password} = req.body
    let isExistUser = await UserModel.findOne({email})
    if(isExistUser){
        res.status(respCode.NOT_FOUND)
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
    
    res.status(respCode.CREATE_SUCCESS).json({
        message: "Resister new user successfully!",
        code: respCode.CREATE_SUCCESS,
        data: {
            token: await genJwt(email),
            username: newUser.username,
            email: newUser.email
        }
    })
})

const login = asyncHandle(async (req, res) => {
    let {username, password} = req.body
    let isUsername = await UserModel.findOne({username})
    if(!isUsername){
        res.status(respCode.NOT_FOUND).json({
            message: 'User not found!',
            code: respCode.NOT_FOUND,
        })
        throw new Error('User not found!')
    }
    let isMatchPw = await bcryp.compare(password, isUsername.password)
    if(!isMatchPw){
        res.status(respCode.NOT_FOUND).json({
            message: "Username or password is not correct!",
        })
        throw new Error('Username or password is not correct!')
    }
    res.status(respCode.SUCCESS).json({
        message: 'Login successfully!',
        code: respCode.SUCCESS,
        data: {
            id: isUsername._id,
            username: isUsername.username,
            token: await genJwt(isUsername.email),
            email: isUsername.email
        }
    })
})

module.exports = {
    register,
    login, 
    verification
}