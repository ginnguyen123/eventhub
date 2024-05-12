import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, Button} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { authReducer, authSelector } from '../../stores/reducers/authReducer';

const HomeScreen = () => {
    const dispatch = useDispatch()

    const auth = useSelector(authSelector)

    return (
        <View style={{backgroundColor: 'tomato', justifyContent: 'center', alignContent: 'center'}}>
            <Text>HomeScreen</Text>
            <Button 
                title='Logout'
                onPress={async () => 
                    await AsyncStorage.setItem('auth', auth.username)
                    // dispatch(remove)
                }
            />
        </View>
    );
}

export default HomeScreen;