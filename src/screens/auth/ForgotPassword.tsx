import { useState } from "react";
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, Space, TextComponent } from "../../components";
import { ArrowRight, Sms } from 'iconsax-react-native'
import { colors } from "../../constants/colors";
import { fontFamilies } from '../../constants/fontFamilies';

const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    return (
        <ContainerComponent back isImageBackgroud>
            <SectionComponent>
                <TextComponent text="Reset Password" title/>
                <TextComponent text="Please enter your email address to request a password reset."/>
                <Space height={26}/>
                <InputComponent 
                    value={email} 
                    onChange={(val) => setEmail(val)} 
                    affix = {
                        <Sms size={20} color={colors.gray.G300}/>
                    }
                    placeholder="abc@gmail.com"
                />
            </SectionComponent>
            <SectionComponent styles={{alignItems: 'center'}}>
                <ButtonComponent 
                    text="SEND" 
                    type="primary" 
                    color={colors.white}
                    icon = {
                        <ArrowRight size={20} color={colors.white}/>
                    }
                    iconFlex="right"
                    textStyle={{
                        fontFamily: fontFamilies.AirbnbCereal.medium,
                        fontSize: 16
                    }}
                />
            </SectionComponent>
        </ContainerComponent>
    );
}

export default ForgotPassword;