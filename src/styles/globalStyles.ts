import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { fontFamilies } from "../constants/fontFamilies";

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white
    },
    text:{
        fontFamily: fontFamilies.AirbnbCereal.regular,
        fontSize: 14,
        color: colors.text
    },
    button:{
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: colors.white,
        padding: 16,
        minHeight: 56,
        flexDirection: 'row'
    }
})