const Router = require('express');
const { register, login, verification } = require('../controller/authController');

const authRouter = Router()

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/verification', verification)

// câu lệnh module.exports là của node js 
// => dùng để xuất 1 đối tượng từ module này ra các module khác sài
module.exports = authRouter;