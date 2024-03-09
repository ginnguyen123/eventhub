import {View, Text} from 'react-native'
import { ButtonComponent, InputComponent } from '../../components';
import {globalStyles} from '../../styles/globalStyles'
import { useState } from 'react';
import {Lock, Sms} from 'iconsax-react-native'
import { colors } from '../../constants/colors';
import ContainerComponent from '../../components/ContainerComponent';

const LoginScreen = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <ContainerComponent
         isImageBackgroud
        >
            <InputComponent 
                value={email} 
                onChange={val => setEmail(val)} 
                placeholder='Email' 
                allowClear
                affix = {
                    <Sms size={22} color={colors.gray.G300}/>
                }
            />
            <InputComponent 
                value={password} 
                onChange={val => setPassword(val)} 
                placeholder='Password' 
                // allowCleard
                isPassword
                affix = {
                    <Lock size={22} color={colors.gray.G300}/>
                }
            />
        </ContainerComponent>
    );
}

export default LoginScreen;