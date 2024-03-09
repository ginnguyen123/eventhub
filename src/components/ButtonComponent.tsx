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
    iconFlex?: 'right' | 'left'
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
        iconFlex
    } = props

    return (
        type === 'primary' ? (
            <TouchableOpacity 
            onPress={onPress}
            style={[globalStyles.button, {
                backgroundColor: background ?? colors.primary
            }, styles]}>
                { icon && icon }
                <TextComponent 
                    text = {text} 
                    color = {color ?? colors.text} 
                    styles={[textStyle,{
                        marginLeft: icon ? 12 : 0 
                    }]}
                    flex={icon && iconFlex === 'right' ? 1 : 0}
    
                />
                { icon && iconFlex === 'right' && icon }
            </TouchableOpacity>
        ) : (
            <TouchableOpacity>
                <TextComponent text={text} color={type === 'link' ? colors.primary : colors.text}/>
            </TouchableOpacity>
        )

    );
}

export default ButtonComponent;