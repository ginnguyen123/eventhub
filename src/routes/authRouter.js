const Router = require('express');
const { register } = require('../controller/authController');

const authRouter = Router()

authRouter.post('/register', register)

// câu lệnh module.exports là của node js 
// => dùng để xuất 1 đối tượng từ module này ra các module khác sài
module.exports = authRouter;