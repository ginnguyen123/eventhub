import { useEffect, useState } from "react";
import { SplashScreen } from "./src/screens";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  // App la noi dieu huong cac man hinh
  const  [isSplash, setIsSplash] = useState(true)

  useEffect(()=>{
    // setTimeout laf 1 callback function
    const timeout = setTimeout(() => {
      setIsSplash(false)
    }, 1500)

    return () => clearTimeout(timeout)
  },[])

  return (
    isSplash ? <SplashScreen /> : 
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>

)}

export default App;