import { ReactNode } from "react";
import { StyleProp, ViewStyle, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";

interface Props {
    justify?: 
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined,
    styles?: StyleProp<ViewStyle>,
    children?: ReactNode,
    onPress?: () => void
}

const RowComponent = (props: Props) => {
    const {
        justify,
        styles,
        children,
        onPress
    } = props

    const localStyle = [
        globalStyles.row, 
        {justifyContent: justify},
        styles
    ]

    return ( onPress ? (
        <TouchableOpacity activeOpacity={0.8} style={localStyle} onPress={() => onPress()}>{children}</TouchableOpacity>
        ) : (
        <View style={localStyle}>{children}</View>
        )
    );
}

export default RowComponent;