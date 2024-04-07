const express = require('express') //import thư viện express để viết api
const cors = require('cors') //import thư viện cors để cho phép các ip khác nhau truy cập vào
const app = express() // khai báo biến app sử dụng thư viện express tạo api
const authRouter = require('./src/routes/authRouter')
const connectDB = require('./src/configs/connectDb')

app.use(cors()) // khai báo app sử dụng cors
app.use(express.json()) //khai báo để truyền tải data bằng json

const PORT = 3001 //khai báo port chạy

// api có /auth => sử dụng authRouter API
app.use('/auth', authRouter)

connectDB()

// chạy server ở port khai báo + lắng nghe sự kiện
app.listen(PORT, (err) => {
    if(err){
        console.log(err)
        return
    }

    console.log(`Server starting at http://localhost:${PORT}`)
})