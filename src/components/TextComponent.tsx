import {View, Text, StyleProp, TextStyle, Platform} from 'react-native'
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';
import { globalStyles } from '../styles/globalStyles';


interface Props {
    text: string;
    color?: string;
    size?: number;
    flex?: number;
    fontFamily?: string;
    styles?: StyleProp<TextStyle>;
    title?: boolean //text la tieu de hay text binh thuong
}

const TextComponent = (props: Props) => {

    const {
        text,
        color,
        size,
        flex,
        fontFamily,
        styles,
        title,
    } = props

    const fontSizeDefault = Platform.OS === 'ios' ? 16 : 14 

    return (
        <Text style={[
            globalStyles.text, // ban dau lay style mac dinh
            {
                color: color ?? colors.text,
                flex: flex ?? 0,
                fontSize: size ? size : title ? 24 : fontSizeDefault, //truyen vao size, mac dinh 14, neu truyen vao title thi size = 24
                fontFamily: fontFamily 
                    ? fontFamily 
                    : title 
                    ? fontFamilies.AirbnbCereal.medium 
                    : fontFamilies.AirbnbCereal.regular
            }, // cac prop style truyen vao de len globalStyles
            styles // styles nguoi dung truyen vao de len cuoi cung
        ]}
        >{text}
        </Text>
    );
}

export default TextComponent;