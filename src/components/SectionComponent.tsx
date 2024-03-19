import { ReactNode } from "react";
import { ViewStyle, StyleProp, View } from "react-native";
import {globalStyles} from './../styles/globalStyles'

interface Props {
    children: ReactNode,
    styles?: StyleProp<ViewStyle> // ViewStyle khacs vowi textstyle là không có color, fontSize...
}

const SectionComponent = (props:Props) => {
    const {
        children,
        styles
    } = props 

    return (
        <View style={[globalStyles.section, styles]}>{children}</View>
    );
}

export default SectionComponent;