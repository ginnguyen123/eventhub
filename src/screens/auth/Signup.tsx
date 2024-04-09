import {View, Text, Image, Switch} from 'react-native'
import { 
    ButtonComponent, 
    InputComponent, 
    SectionComponent, 
    ContainerComponent, 
    TextComponent,
    Space,
    RowComponent
} from '../../components';
import {globalStyles} from '../../styles/globalStyles'
import { useEffect, useState } from 'react';
import {Lock, Sms} from 'iconsax-react-native'
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';
import SocialLogin from './component/SocialLogin'
import { LoadingModal } from '../../modals';
import authenticationAPI from '../../apis/authApi';
import { Validate } from '../../utils/validate';

const initValue = {
    username: '',
    email: '',
    password: '',
    comfirmPassword: ''
}

const Signup = ({navigation}:any) => {
    const [values, setValues] = useState(initValue)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errorMes, setErrorMes] = useState<string>('')

    const handlerChangeValue = (key: string, value:string) => {
        const data:any = {...values}
        data[`${key}`] = value
        setValues(data)
    }

    const handleRegister = async () => {
        let {username, password, comfirmPassword, email} = values

        if(!Validate.Email(email) && email){
            setErrorMes('Email không đúng định dạng!')
            return
        }

        
        if(username && password && comfirmPassword && email){
            setIsLoading(true)
            try {
                const res = await authenticationAPI.HandleAuthentication(
                    '/register',
                    {
                        username,
                        email,
                        password
                    },
                    'POST'
                )
                console.log(res);
                setIsLoading(false)
            } catch (error) {
                console.log(error);
                setIsLoading(false)
            }
        }
        else{
            setErrorMes('Vui lòng nhập đầy đủ thông tin!')
        }
    }

    useEffect(()=>{
        let {username, password, comfirmPassword, email} = values
        if(username || password || comfirmPassword || email) {
            setErrorMes('')
        }

    }, [values.email, values.comfirmPassword, values.password, values.username])

    return (
        <ContainerComponent
         isImageBackgroud
         isScroll
         back
        >
            {/* <SectionComponent styles={{
                justifyContent: 'center',
                alignItems: 'center', 
                marginTop: 75
            }}>
                <Image 
                    source={require('./../../assets/images/text-logo.png')}
                    style={{width:162, height: 114, marginBottom: 30}}
                />
            </SectionComponent> */}
            <SectionComponent>
                <TextComponent text='Sign up' fontFamily={fontFamilies.AirbnbCereal.medium} size={24} />
                <Space height={21}/>
                <InputComponent
                    value={values.username} 
                    onChange={val => handlerChangeValue('username', val)} 
                    placeholder='User name' 
                    allowClear
                    affix = {
                        <Sms size={22} color={colors.gray.G300}/>
                    }
                />
            </SectionComponent>
            <SectionComponent>
                <InputComponent 
                    value={values.email} 
                    onChange={val => handlerChangeValue('email', val)} 
                    placeholder='Email'
                    allowClear
                    affix = {
                        <Lock size={22} color={colors.gray.G300}/>
                    }
                />
            </SectionComponent>
            <SectionComponent>
                <InputComponent 
                    value={values.password} 
                    onChange={val => handlerChangeValue('password', val)} 
                    placeholder='Password' 
                    // allowCleard
                    isPassword
                    affix = {
                        <Lock size={22} color={colors.gray.G300}/>
                    }
                />
                {/* <RowComponent justify='space-between'>
                    <RowComponent onPress={()=> setIsRemember(!isRemember)}>
                        <Switch 
                            trackColor={{true: colors.primary}}
                            thumbColor={colors.white}
                            value={isRemember} 
                            onChange={() => setIsRemember(!isRemember)}
                        />
                        <TextComponent text={'Remember me'}/>
                    </RowComponent>
                    <ButtonComponent 
                        type='text' 
                        text='Forgot password?' 
                        color={colors.text}
                        onPress={() => {}}
                    />
                </RowComponent> */}
            </SectionComponent>
            <SectionComponent>
                <InputComponent 
                    value={values.comfirmPassword} 
                    onChange={val => handlerChangeValue('comfirmPassword', val)} 
                    placeholder='Comfirm password' 
                    // allowCleard
                    isPassword
                    affix = {
                        <Lock size={22} color={colors.gray.G300}/>
                    }
                />
            </SectionComponent>
            {
                errorMes && 
                <SectionComponent>
                    <TextComponent text={errorMes} color={colors.dangers}/>
                </SectionComponent>
            }
            <Space height={16}/>
            <SectionComponent styles={{alignItems: 'center'}}>
                <ButtonComponent 
                    text='SIGIN UP' 
                    type='primary' 
                    color={colors.white} 
                    textStyle={{
                        fontFamily: fontFamilies.AirbnbCereal.medium,
                        fontSize: 16
                    }}
                    onPress={() => handleRegister()}
                />
            </SectionComponent>
            <SectionComponent>
                <SocialLogin/>
                <RowComponent justify='center'>
                    <TextComponent text="Do have an account?"/>
                    <Space width={10}/>
                    <ButtonComponent text="Sign in" type='link' onPress={() => navigation.navigate('LoginScreen')}/>
                </RowComponent>
            </SectionComponent>
            <LoadingModal visiable={isLoading}/>
        </ContainerComponent>
    );
}

export default Signup;