import {Text} from 'react-native'
import { 
    ButtonComponent, 
    InputComponent, 
    SectionComponent, 
    ContainerComponent, 
    TextComponent,
    Space,
    RowComponent
} from '../../../components';
import { colors } from '../../../constants/colors';
import { fontFamilies } from '../../../constants/fontFamilies';
import { Facebook, Google } from '../../../assets/svgs';


const SocialLogin = () => {
    return (
        <SectionComponent>
            <Space height={30}/>
            <TextComponent 
                styles={{textAlign: 'center'}}
                text='OR' 
                color={colors.gray.gray4} 
                fontFamily={fontFamilies.AirbnbCereal.medium}
                size={16}
            />
            <Space height={20}/>
            <ButtonComponent 
                text='Login with Google' 
                type='primary' 
                color={colors.text}
                background={colors.white}
                icon={<Google/>}
            />
            <Space height={20}/>
            <ButtonComponent 
                text='Login with Google' 
                type='primary' 
                color={colors.text}
                background={colors.white}
                icon={<Facebook/>}
            />
        </SectionComponent>
    );
}

export default SocialLogin;