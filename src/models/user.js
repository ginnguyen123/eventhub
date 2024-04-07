const { mongoose } = require('mongoose')

// sử dụng mongoose => 1 đối tượng = class của java, giúp tham chiếu tới db
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    photoUrl: {
        type: String
    },
    creatAt: {
        type: Date,
        default: Date.now()
    },
    updateAt:{
        type: Date,
        default: Date.now()
    }
})

const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel