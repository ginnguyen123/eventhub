import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

// router dieu huong cac trang(stack) khong nam trong tab bottom
const MainNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            {/* add toi cac trang o tab bottom */}
            <Stack.Screen name="Main" component={TabNavigator}/>
            {/* cac trang k nam trong tab bottom duoc add o day */}
        </Stack.Navigator>
    );
}

export default MainNavigator;