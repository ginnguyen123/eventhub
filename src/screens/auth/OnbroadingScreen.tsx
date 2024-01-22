import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import Swiper from "react-native-swiper";
import { info } from "../../constants/Infos";
import { colors } from "../../constants/colors";
import { useState } from "react";

const OnbroadingScreen = ({navigation}:any) => {
    const [index, setIndex] = useState(0)

    return (
        <View style={[globalStyles.container]}>
            <Swiper style={{}} loop={false} 
                onIndexChanged={num => setIndex(num)} 
                index={index}
                activeDotColor={colors.white}
            >
                <Image source={require('../../assets/images/onboarding-1.png')} 
                style={{
                    flex: 1, 
                    width: info.sizes.WIDTH, 
                    height: info.sizes.HIEGHT, 
                    resizeMode: 'cover'
                    }}
                />
                <Image source={require('../../assets/images/onboarding-2.png')} 
                style={{
                    flex: 1, 
                    width: info.sizes.WIDTH, 
                    height: info.sizes.HIEGHT, 
                    resizeMode: 'cover'
                    }}
                />
                <Image source={require('../../assets/images/onboarding-2.png')} 
                style={{
                    flex: 1, 
                    width: info.sizes.WIDTH, 
                    height: info.sizes.HIEGHT, 
                    resizeMode: 'cover'
                    }}
                />
            </Swiper>
            <View style={[{
                paddingHorizontal:25,
                paddingVertical: 25,
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }]}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={[styles.text, {color: colors.gray.GDA}]}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')}>
                    <Text style={styles.text}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        color: colors.white,
        fontSize: 16,
        fontWeight: '600'
    }
})

export default OnbroadingScreen;