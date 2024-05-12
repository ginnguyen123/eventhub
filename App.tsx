import { useEffect, useState } from "react";
import { SplashScreen } from "./src/screens";
 import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from "react-redux";
import store from "./src/stores/stores";
import AppNavigator from "./src/navigators/AppNavigator";


const App = () => {

  return <>
  <Provider store={store}>
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
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </GestureHandlerRootView>
    </Provider>
  </>
}

export default App;