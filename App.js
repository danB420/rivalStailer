import React, { useEffect, useState } from "react";
import { NativeBaseProvider, Box, Text,extendTheme, Stack } from "native-base";
import Home from "./screens/customer/HomeScreen/Home";
import AboutBusiness from "./screens/customer/AboutBusiness/AboutBusiness";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function App() {

  const Stack =createNativeStackNavigator();
  const theme = extendTheme({
    colors: {
      primary:{
        500:"#FFFFFF"
      },
      neutral:{
        500:"#F4F3EF"
      },
      accent:{
        500:"#FD4343"
      },
      star:{
        500:"#FFB800"
      }
    },
    config: {
      // Changing initialColorMode to 'light's
      initialColorMode: 'light',
    },
  });
  return (
   
 <NativeBaseProvider theme={theme}>
      
      
      <NavigationContainer>
      <Box bg="neutral.500" w="100%" h="100%"    >
      <Stack.Navigator screenOptions={{headerShown:false,}} >
        
        <Stack.Screen
        name="Home"
        component={Home}
        options={{}}
        headerShown={false}
        
      
        ></Stack.Screen>
          <Stack.Screen
        name="AboutBusiness"
        component={AboutBusiness}
        options={{}}
        headerShown={false}
      
      
        >

        
        
        </Stack.Screen>
        
      </Stack.Navigator>
      </Box>
      </NavigationContainer>
      

    </NativeBaseProvider>
    
   
  );
}
