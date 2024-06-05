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
import SocialLogin from './components/SocialLogin'
import { LoadingModal } from '../../modals';
import authenticationAPI from '../../apis/authApi';
import { Validate } from '../../utils/validate';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../stores/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ErrorMessages {
    username: string,
    email: string,
    password: string,
    comfirmPassword: string
}

const initValue = {
    username: '',
    email: '',
    password: '',
    comfirmPassword: ''
}

const Signup = ({navigation}:any) => {
    const [values, setValues] = useState(initValue)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errorMes, setErrorMes] = useState<any>()
    const distPatch = useDispatch()
    const [isDisable, setIsDisable] = useState<boolean>(true)

    const formValidator = (key:string) => {
        let data = {...errorMes}
        let message:string = ''
        
        switch (key) {
            case 'email': 
                if(!values.email){
                    message = 'Email is required!'
                }
                else if(!Validate.Email(values.email)){
                    message = 'Email is not valited!'
                }
                else {
                    message = ''
                }
                break;
            case 'password':
                message = !values.password ? 'Password is required!' : ''
                break;
            case 'comfirmPassword':
                message = !values.comfirmPassword ? 'Comfirm password is required!' 
                : values.comfirmPassword !== values.password ? 'Password is not match!' : ''
                break;
            case 'username':
                if(!values.username){
                    message = 'Username is required!'
                }
                else {
                    message = ''
                }
                break
        }
        data[`${key}`] = message
        setErrorMes(data)
    }

    const handlerChangeValue = (key: string, value:string) => {
        const data:any = {...values}
        data[`${key}`] = value
        setValues(data)
    }

    const handleRegister = async () => {
        let api = '/verification'    
        setIsLoading(true)            
        try{
            let res = await authenticationAPI.HandleAuthentication(api, {email: values.email}, 'POST')
            navigation.navigate('Verification', {
                code: res.data.code,
                username: values.username,
                email: values.email,
                password: values.password
            })
            setIsLoading(false)
        }catch(error){
            console.log(error);
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        let {username, password, comfirmPassword, email} = values
        if(username || password || comfirmPassword || email) {
            setErrorMes('')
        }

    }, [values.email, values.comfirmPassword, values.password, values.username])

    useEffect(()=>{
        if(!errorMes || 
            (errorMes && (errorMes.email || errorMes.comfirmPassword 
            || errorMes.password || errorMes.username))){
                setIsDisable(true)
            }
        else{
            setIsDisable(false)
        }

    },[errorMes])

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
                    onEnd={() => formValidator('username')} 
                />
            </SectionComponent>
            <SectionComponent>
                <InputComponent 
                    value={values.email} 
                    onChange={val => handlerChangeValue('email', val)} 
                    placeholder='abc@gmail.com'
                    allowClear
                    affix = {
                        <Lock size={22} color={colors.gray.G300}/>
                    }
                    onEnd={() => formValidator('email')} 
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
                    onEnd={() => formValidator('password')}
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
                    onEnd={() => formValidator('comfirmPassword')}
                />
            </SectionComponent>
            {
                errorMes && 
                <SectionComponent>
                    {
                      Object.keys(errorMes).map((error, index) => 
                        errorMes[`${error}`] && (
                        <TextComponent 
                            text={errorMes[`${error}`]} 
                            key={index}
                            color={colors.dangers}
                        />
                      ))  
                    }
                    
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
                    disable={isDisable}
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