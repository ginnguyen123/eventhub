import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { addAuth, authSelector } from '../stores/reducers/authReducer';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import { SplashScreen } from '../screens';

const AppNavigator = () => {
      // App la noi dieu huong cac man hinh
    const [isSplash, setIsSplash] = useState(true)

    // cu phap getter, setter lay JWT
    const {getItem, setItem} = useAsyncStorage('auth')

    useEffect(()=>{
        checkLogin()
        // setTimeout laf 1 callback function
        const timeout = setTimeout(() => {
        setIsSplash(false)
        }, 1500)

        return () => clearTimeout(timeout)
    },[])

    const auth = useSelector(authSelector)
    const dispatch = useDispatch()

    const checkLogin = async () => {
        const auth = await getItem()
        auth && dispatch(addAuth((auth)))
    }

    return (
        <>
            { 
                isSplash ? <SplashScreen /> : (
                    auth?.token ? <MainNavigator /> : <AuthNavigator />
                )
            }
        </>
    );
}

export default AppNavigator;