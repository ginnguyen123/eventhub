import { useEffect, useState } from "react";
import { SplashScreen } from "./src/screens";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import MainNavigator from "./src/navigators/MainNavigator";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from "react-redux";
import store from "./src/stores/stores";


const App = () => {
  // App la noi dieu huong cac man hinh
  const [isSplash, setIsSplash] = useState(true)
  const [assetToken, setAssetToken] = useState('')

  // cu phap getter, setter lay JWT
  const {getItem, setItem} = useAsyncStorage('assetToken')

  useEffect(()=>{
    // setTimeout laf 1 callback function
    const timeout = setTimeout(() => {
      setIsSplash(false)
    }, 1500)

    checkLogin()

    return () => clearTimeout(timeout)
  },[])

  const checkLogin = async () =>{
    const token = await getItem()
    token && setAssetToken(token)
  }

  return <>
  {/* translucent => hinh splash la hinh nen cua StatusBar => tran man hinh*/}
    <StatusBar 
    barStyle='dark-content' 
    backgroundColor='transparent'
    translucent
    />
    {/* 
    Provider của react-redux dùng để bọc toàn bộ app của project
    => các state + action có thể sử dụng toàn dự án
    => prop store truyền vào store + các thẻ con trong project cần sử dụng state + action trong reduct
     */}
    <Provider store={store}>
      {
        isSplash ? (
          <SplashScreen />
        ) : (
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
              {
                assetToken ? <MainNavigator /> : <AuthNavigator />
              }
            </NavigationContainer>
          </GestureHandlerRootView>
        )
      }
    </Provider>

  </>
}

export default App;