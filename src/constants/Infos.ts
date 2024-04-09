import { Dimensions } from "react-native";

const DOMAIN = 'http://192.168.1.19'

const PORT = '3001'

export const info = {
    sizes: {
        WIDTH: Dimensions.get('window').width,
        HIEGHT: Dimensions.get('window').height
    },
    BASE_URL: `${DOMAIN}:${PORT}`
}