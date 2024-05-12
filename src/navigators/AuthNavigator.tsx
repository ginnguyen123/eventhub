import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
    LoginScreen, 
    Signup, 
    ForgotPassword, 
    Verication 
} from "../screens";
import OnbroadingScreen from './../screens/auth/OnbroadingScreen'
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator()
    const [isUserExist, setIsUserExist] = useState<boolean>(false)

    useEffect(() => {
        checkUserExisting()
    },[])
    
    const checkUserExisting = async () => {
        let res = await AsyncStorage.getItem('auth')

        res && setIsUserExist(true)
    }

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            {
                !isUserExist && (
                    <Stack.Screen name='OnbroadingScreen' component={OnbroadingScreen}/>
                )
            }
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='Signup' component={Signup}/>
            <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
            <Stack.Screen name='Verication' component={Verication}/>
        </Stack.Navigator>
    );
}

export default AuthNavigator;