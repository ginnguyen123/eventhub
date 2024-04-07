const Router = require('express')

const authRouter = Router()

authRouter.post('/register', (req, res) => {
    console.log(req.body);
    res.send('register')
})

// câu lệnh module.exports là của node js 
// => dùng để xuất 1 đối tượng từ module này ra các module khác sài
module.exports = authRouter;