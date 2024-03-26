import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
    LoginScreen, 
    Signup, 
    ForgotPassword, 
    Verication 
} from "../screens";
import OnbroadingScreen from './../screens/auth/OnbroadingScreen'

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='OnbroadingScreen' component={OnbroadingScreen}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='Signup' component={Signup}/>
            <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
            <Stack.Screen name='Verication' component={Verication}/>
        </Stack.Navigator>
    );
}

export default AuthNavigator;