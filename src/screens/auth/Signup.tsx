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
import { useState } from 'react';
import {Lock, Sms} from 'iconsax-react-native'
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';
import SocialLogin from './component/SocialLogin'

const initValue = {
    username: '',
    email: '',
    password: '',
    comfirmPassword: ''
}

const Signup = ({navigation}:any) => {
    // const [email, setEmail] = useState<string>(email)
    // const [password, setPassword] = useState<string>(password)
    const [values, setValues] = useState(initValue)

    const handlerChangeValue = (key: string, value:string) => {
        const data:any = {...values}
        data[`${key}`] = value
        setValues(data)
    }

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
            <Space height={16}/>
            <SectionComponent>
                <ButtonComponent 
                    text='SIGIN UP' 
                    type='primary' 
                    color={colors.white} 
                    textStyle={{
                        fontFamily: fontFamilies.AirbnbCereal.medium,
                        fontSize: 16
                    }}
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
        </ContainerComponent>
    );
}

export default Signup;