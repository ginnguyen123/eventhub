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
    },
    section:{
        paddingHorizontal: 16,
        paddingBottom: 20
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    shadow: {
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 6
    }
})