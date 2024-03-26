import {View, Text, StyleProp, TextStyle, ViewStyle, TouchableOpacity} from 'react-native'
import { ReactNode } from 'react';
import TextComponent from './TextComponent';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
    text: string;
    type?: 'primary' | 'text' | 'link';
    icon?: ReactNode;
    background?: string;
    styles?: StyleProp<ViewStyle>;
    color?: string;
    textStyle?: StyleProp<TextStyle>;
    onPress?: () => void;
    iconFlex?: 'right' | 'left',
    size?: number,
    textFont?: string
}

const ButtonComponent = (props: Props) => {

    const {
        text,
        type,
        icon,
        background,
        styles,
        color,
        textStyle,
        onPress,
        iconFlex,
        size,
        textFont
    } = props

    return (
        type === 'primary' ? (
            <TouchableOpacity 
            onPress={onPress}
            style={[
                globalStyles.button,
                globalStyles.shadow,
                {
                    backgroundColor: 
                    background ?? colors.primary,
                    width: '80%'
                }, 
                styles]}>
                { icon && icon && iconFlex === 'left' }
                <TextComponent 
                    text = {text} 
                    color = {color ?? colors.text} 
                    styles={[textStyle,{
                        marginLeft: icon ? 12 : 0,
                        textAlign: 'center'
                    }]}
                    flex={icon && iconFlex === 'right' ? 1 : 0}
                    fontFamily={textFont ?? fontFamilies.AirbnbCereal.regular}
                    size={16}
                />
                { icon && iconFlex === 'right' && icon }
            </TouchableOpacity>
        ) : (
            <TouchableOpacity onPress={onPress}>
                <TextComponent text={text} color={type === 'link' ? colors.primary : colors.text}/>
            </TouchableOpacity>
        )

    );
}

export default ButtonComponent;