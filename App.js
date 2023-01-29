import React, { useEffect, useState } from "react";
import { NativeBaseProvider, Box, Text, extendTheme, Stack } from "native-base";
import Home from "./screens/customer/HomeScreen/Home";
import AboutBusiness from "./screens/customer/AboutBusiness/AboutBusiness";
import CodeVerification from "./screens/customer/Login/Register/CodeVerification";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authentification from "./screens/customer/Login/Register/Authentification";
import { AuthContext} from "./contexts/AuthContext";
import { useContext } from "react";

export default function App() {
  
  const authContext = useContext(AuthContext)
  const Stack = createNativeStackNavigator();
  const theme = extendTheme({
    colors: {
      primary: {
        500: "#FFFFFF",
      },
      neutral: {
        500: "#F4F3EF",
      },
      accent: {
        500: "#FD4343",
      },
      star: {
        500: "#FFB800",
      },
    },
    config: {
      // Changing initialColorMode to 'light's
      initialColorMode: "light",
    },
  }); 
 
  useEffect(() => {
   
   console.log("AUTH TOKEN:" + authContext.authToken)
   
  });
  return (
    
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Box bg="neutral.500" w="100%" h="100%">
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {authContext.authenticated === false ? (
                <>
                  <Stack.Screen
                    name="Authentification"
                    component={Authentification}
                    options={{}}
                    headerShown={false}
                  />
                  <Stack.Screen
                    name="CodeVerification"
                    component={CodeVerification}
                    options={{}}
                    headerShown={false}
                  />
                </>
              ) : (
                <>
                  <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{}}
                    headerShown={false}
                  />
                  <Stack.Screen
                    name="AboutBusiness"
                    component={AboutBusiness}
                    options={{}}
                    headerShown={false}
                  />
                </>
              )}
            </Stack.Navigator>
          </Box>
        </NavigationContainer>
      </NativeBaseProvider>
  
  );
}
