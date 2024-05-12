import {View, Text, Image, Switch, Alert} from 'react-native'
import { 
    ButtonComponent, 
    InputComponent, 
    SectionComponent, 
    ContainerComponent, 
    TextComponent,
    Space,
    RowComponent
} from '../../components';
import { useState } from 'react';
import {Lock, Sms} from 'iconsax-react-native'
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';
import SocialLogin from './component/SocialLogin'
import authenticationAPI from '../../apis/authApi';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../stores/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DOMAIN = 'http://192.168.1.19'
const PORT = '3001'
const URL = `${DOMAIN}:${PORT}`

const LoginScreen = ({navigation}: any) => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isRemember, setIsRemember] = useState<boolean>(false)
    const dispatch = useDispatch()

    const handleLogin = async () => {
        if(!username && !password){
            return Alert.alert('Vui lòng nhập đầy đủ thông tin!')
        }
        try{
            let res = await authenticationAPI.HandleAuthentication(
                '/login', 
                {username, password}, 
                'POST'
            )
            dispatch(addAuth(res.data))
            await AsyncStorage.setItem(
                'auth', 
                isRemember ? JSON.stringify(res.data) : username
            )
            
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <ContainerComponent
         isImageBackgroud
         isScroll
        >
            <SectionComponent styles={{
                justifyContent: 'center',
                alignItems: 'center', 
                marginTop: 75
            }}>
                <Image 
                    source={require('./../../assets/images/text-logo.png')}
                    style={{width:162, height: 114, marginBottom: 30}}
                />
            </SectionComponent>
            <SectionComponent>
                <TextComponent text='Sign in' fontFamily={fontFamilies.AirbnbCereal.medium} size={24} />
                <Space height={21}/>
                <InputComponent
                    value={username} 
                    onChange={val => setUsername(val)} 
                    placeholder='Email' 
                    allowClear
                    affix = {
                        <Sms size={22} color={colors.gray.G300}/>
                    }
                />
            </SectionComponent>
            <SectionComponent>
                <InputComponent 
                    value={password} 
                    onChange={val => setPassword(val)} 
                    placeholder='Password' 
                    allowClear
                    isPassword
                    affix = {
                        <Lock size={22} color={colors.gray.G300}/>
                    }
                />
                <RowComponent justify='space-between'>
                    <RowComponent onPress={()=> setIsRemember(!isRemember)}>
                        <Switch 
                            trackColor={{true: colors.primary}}
                            thumbColor={colors.white}
                            value={isRemember} 
                            onChange={() => setIsRemember(!isRemember)}
                        />
                        <Space width={5}/>
                        <TextComponent text={'Remember me'}/>
                    </RowComponent>
                    <ButtonComponent 
                        type='text' 
                        text='Forgot password?' 
                        color={colors.text}
                        onPress={() => navigation.navigate('ForgotPassword')}
                    />
                </RowComponent>
            </SectionComponent>
            <Space height={16}/>
            <SectionComponent styles={{alignItems: 'center'}}>
                <ButtonComponent 
                    text='SIGIN IN' 
                    type='primary' 
                    color={colors.white} 
                    textStyle={{
                        fontFamily: fontFamilies.AirbnbCereal.medium,
                        fontSize: 16
                    }}
                    onPress={() => handleLogin()}
                />
            </SectionComponent>
            <SectionComponent>
                <SocialLogin/>
                <RowComponent justify='center'>
                    <TextComponent text="Don't have an account?"/>
                    <Space width={10}/>
                    <ButtonComponent text="Sign up" type='link' onPress={() => navigation.navigate('Signup')}/>
                </RowComponent>
            </SectionComponent>
        </ContainerComponent>
    );
}

export default LoginScreen;