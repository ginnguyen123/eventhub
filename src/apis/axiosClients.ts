import axios from "axios";
// thư viện giúp truyền tham số param theo url
import queryString from "query-string"; 

const axiosClient = axios.create({
    // chuyển đổi param dạng obj => dạng param url sau dấu ?
    paramsSerializer: params => queryString.stringify(params)
})

// sử dụng interceptors để customer các request
axiosClient.interceptors.request.use( async (config:any) => {
    // config headers, mặc định luôn có Authorization: Token
    // Accept kiểu data truyền tải
    config.headers = {
        Authorization: '',
        Accept: 'application/json',
        ...config.headers
    }
    // nếu có kém theo data, thường sử dụng cho post
    config.data
    return config
})

// sử dụng interceptors để customer các response => nơi check các mã lỗi
axiosClient.interceptors.response.use(response => {
    if(response.status === 200)
        return response.data

    // be trả lỗi về
    throw new Error('Error')
},
    // nếu axios lỗi
    error => {
        // log lỗi
        console.log(`Error api ${JSON.stringify(error)}`)
        throw new Error(error.response)
    }
)

export default axiosClient