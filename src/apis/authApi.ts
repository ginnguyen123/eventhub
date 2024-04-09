import { info } from "../constants/Infos"
import axiosClient from "./axiosClients"

class AuthAPI {
    HandleAuthentication = async (
        url: string,
        data?: any,
        method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    ) => {
        return await axiosClient(
            `${info.BASE_URL}/auth${url}`,
            {
                method: method ?? 'GET',
                data 
            }
        )
    }
}

const authenticationAPI = new AuthAPI()

// tạo kiểu singletor => tạo 1 đối tượng đơn sử dụng xuyên suốt dự án
export default authenticationAPI