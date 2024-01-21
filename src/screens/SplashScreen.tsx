import { ActivityIndicator, Image, ImageBackground } from "react-native";
import { info } from "../constants/Infos";
import {Space} from './../components/index'
import { colors } from './../constants/colors';

const SplashScreen = () => {
    return (
        <ImageBackground 
            source={require('../assets/images/splash.png')} 
            style={{flex:1, justifyContent:'center', alignItems:'center'}}
            imageStyle={{flex: 1}}
        >
            <Image 
                source={require('../assets/images/logo.png')}
                style={{
                    width: info.sizes.WIDTH * 0.7,
                    resizeMode: 'contain'
                }}
            />
            <Space height={20}/>
            <ActivityIndicator color={colors.gray.G300} size={22}/>
        </ImageBackground >
    )
}

export default SplashScreen;