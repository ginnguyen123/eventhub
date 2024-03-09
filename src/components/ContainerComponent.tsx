import { ReactNode } from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { View, Text, ScrollView } from "react-native";
import { globalStyles } from "../styles/globalStyles";

interface Props {
    isImageBackgroud?: boolean,
    isScroll?: boolean,
    title?: string,
    children: ReactNode,
}

const ContainerComponent = (props: Props) => {
    const {
        isImageBackgroud,
        isScroll,
        title,
        children,
    } = props

    const returnContainer = isScroll ? (
        // globalStyles.container có flex = 1 => ăn hết height + width màn hình / nhưng có backgroud = white => bị đè hình
        <ScrollView style={[{flex: 1}]}>
            {children}
        </ScrollView>
    ) : (
        // globalStyles.container có flex = 1 => ăn hết height + width màn hình
        <View style={[{flex: 1}]}>
            {children}
        </View>
    )

    return (
        // đặt SafeAreaView để tránh phần tai thỏ
        isImageBackgroud ? (
            // nếu đặt SafeAreaView bọc ngoài ImageBackground => hình ImageBackground không ăn hết màn hình
            <ImageBackground
            // flex: 1 => ăn hết height + width màn hình
                style={{flex: 1}}
                imageStyle={{flex: 1}}
                source={require('./../assets/images/splash.png')}
            >   
            {/* SafeAreaView tránh phần tai thỏ */}
                <SafeAreaView style={{flex: 1}}>
                    {returnContainer}
                </SafeAreaView>
            </ImageBackground>
        ) : (
            <SafeAreaView 
                style={[globalStyles.container]}
            >
                <View>
                    {returnContainer}
                </View>
            </SafeAreaView>
        )
        
    )
}

export default ContainerComponent;