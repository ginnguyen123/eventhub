import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardType } from "react-native";
import TextComponent from "./TextComponent";
import { ReactNode, useState } from "react"
import { EyeSlash } from "iconsax-react-native";
import { colors } from './../constants/colors'
import  AntDesign  from "react-native-vector-icons/AntDesign";
import { globalStyles } from "../styles/globalStyles";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

interface Props {
    value: string,
    onChange: (value: string) => void,
    affix?: ReactNode, //sử dụng ReactNode ở tham số affix => affix có thể nhận 1 loạt dữ liệu khác nhau hoặc là component
    suffix?: ReactNode,
    placeholder?: string,
    isPassword?: boolean,
    allowClear?: boolean,
    type?: KeyboardType
}

const InputComponent = (props: Props) => {
    const {
        value,
        onChange,
        affix,
        suffix,
        placeholder,
        isPassword,
        allowClear,
        type
    } = props

    const [isShowPass, setIsShowPass] = useState(isPassword ?? false)
    const [text, setText] = useState(value)

    return (
        <View style={[styles.inputContainer]}>
            {affix ?? affix}
            <TextInput 
                value={value}
                placeholder={placeholder ?? ''} 
                onChangeText={val => onChange(val)}
                secureTextEntry={isShowPass}
                style={[styles.input, globalStyles.text]}
                placeholderTextColor={'#747688'}
                keyboardType={type ?? 'default'} 
                autoCapitalize="none" //tắt tự đông viết hoa
            />
            {suffix ?? suffix}
            <TouchableOpacity
                onPress={
                    isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')
                }
            >
                { isPassword ? (
                    <FontAwesome size={24} color={colors.gray.G300} name={isShowPass ? "eye-slash" : "eye"}/> 
                    ) : (
                        value.length > 0 && allowClear && (
                            <AntDesign size={24} color={colors.gray.G300} name="close"/> 
                        )
                    )
                }
            </TouchableOpacity> 
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderRadius: 12,
        borderColor: colors.gray.gray3,
        borderWidth: 1,
        width: '100%',
        minHeight: 56,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: colors.white,
        marginBottom: 19
    },
    input:{
        margin: 0,
        padding: 0,
        flex: 1, 
        paddingHorizontal: 14
    }
})

export default InputComponent;