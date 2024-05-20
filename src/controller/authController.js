const UserModel = require('../models/user')
const bcryp = require('bcrypt')
const asyncHandle = require('express-async-handler')
const jwt = require('jsonwebtoken')
const respCode = require('./../common/respCode')
const nodemailer = require('nodemailer')
require('dotenv').config()

const tranforter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 587, `false` for all other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
})

const genJwt = async (strPayload) =>{
    let token = await jwt.sign({ strPayload }, process.env.SECURITY_SIGNATURE, {
        expiresIn: '12h'
    })
    return token
}

const handleSendMail= async (value, email) => {
    try{
        await tranforter.sendMail({
            from: `Support EvenHub 👻 <${process.env.EMAIL}>`, // sender address
            to: `${email}`, // list of receivers
            subject: "Verification - EvenHub", // Subject line
            text: "Your code verification email:", // plain text body
            html: "<h1>Hello world?</1>", // html body
        });
    }
    catch(error){
        console.log('=====> Can not send email!');
        console.log('=====> Cause: ' + error);
    }
}

// có sử lý với fe nên sử dụng asyncHandle
const verification = asyncHandle (async(req, res) => {
    let {email} = req.body
    await handleSendMail('',email)
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