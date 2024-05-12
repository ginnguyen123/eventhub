import { ReactNode } from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { View, Text, ScrollView } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import RowComponent from "./RowComponent";
import ButtonComponent from "./ButtonComponent";
import { ArrowLeft } from "iconsax-react-native";
import { colors } from "../constants/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import TextComponent from "./TextComponent";
import { fontFamilies } from "../constants/fontFamilies";

interface Props {
    isImageBackgroud?: boolean,
    isScroll?: boolean,
    title?: string,
    children: ReactNode,
    back?: boolean
}

const ContainerComponent = (props: Props) => {
    const {
        isImageBackgroud,
        isScroll,
        title,
        children,
        back
    } = props

    const navigation: any = useNavigation()

    const headerComponent = () => {
        return (
            <View style={{flex: 1, paddingTop: 30}}>
                {(title || back)  && (
                        <RowComponent styles={{
                            paddingHorizontal: 16, 
                            paddingVertical: 8,
                            // theo quy định của google thì nút back tối thiểu
                            minWidth: 48,
                            minHeight: 48
                        }}>
                            {
                                back && (
                                    <TouchableOpacity onPress={() => navigation.goBack()} style={{marginRight: 12}}>
                                        <ArrowLeft size={24} color={colors.gray.G300}/>
                                    </TouchableOpacity>
                                    // <ButtonComponent 
                                    //     text={title ?? ''} 
                                    //     icon={<ArrowLeft size={24} color={colors.gray.G300}/>}
                                    //     onPress={() => navigation.goBack()}
                                    // /> 
                                )
                            }
                            {title && <TextComponent 
                                    text={title} 
                                    fontFamily={fontFamilies.AirbnbCereal.medium}
                                    size={16}
                                />
                            }
                        </RowComponent>
                    )}
                {returnContainer}
            </View>
        )
    }

    const returnContainer = isScroll ? (
        // globalStyles.container có flex = 1 => ăn hết height + width màn hình / nhưng có backgroud = white => bị đè hình
        <ScrollView 
            style={[{flex: 1}]}
            // tắt thanh Indicator
            showsVerticalScrollIndicator={false}
        >
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
                    {/* {returnContainer} */}
                    {headerComponent()}
                </SafeAreaView>
            </ImageBackground>
        ) : (
            <SafeAreaView 
                style={[globalStyles.container]}
            >
                <View>
                    {/* {returnContainer} */}
                    {headerComponent()}
                </View>
            </SafeAreaView>
        )
        
    )
}

export default ContainerComponent;