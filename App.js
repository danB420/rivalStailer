import React, { useEffect, useState } from "react";
import { NativeBaseProvider, Box, Text, extendTheme, Stack } from "native-base";

import { FontAwesome5 } from '@expo/vector-icons'; 


import { NavigationContainer } from "@react-navigation/native";

import { AuthContext} from "./contexts/AuthContext";
import { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens
import Home from "./screens/customer/HomeScreen/Home";
import AboutBusiness from "./screens/customer/AboutBusiness/AboutBusiness";
import CodeVerification from "./screens/customer/Login/Register/CodeVerification";
import Authentification from "./screens/customer/Login/Register/Authentification";

import Dashboard from "./screens/owner/Dashboard/Dashboard";
import Appointments from "./screens/owner/Appointments/Appointments";


export default function App() {
  
  const authContext = useContext(AuthContext)
  
  const Tab = createBottomTabNavigator();
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
            
            <Tab.Navigator screenOptions={({ route})=>({
            headerShown:false,
            tabBarActiveTintColor: '#FD4343',
              tabBarInactiveTintColor: 'gray',
            
              tabBarIcon :({focused,color,size}) =>{
                let iconName;
                let rn= route.name;
              
                if(rn === "Dashboard"){
                  iconName="home"
                }
                else if(rn === "Appointments")
                iconName="calendar-alt"


                return <FontAwesome5 name={`${iconName}`} size={24} color="black" />
              },

              
              
              
               

            })}
         
            
         
            >
              {authContext.authenticated === false ? (
                <>
               
                  <Tab.Screen
                    name="Authentification"
                    component={Authentification}
                    options={{
                      tabBarStyle: { display: "none" },
                    }}
                    
                    headerShown={false}
                  />
                  <Tab.Screen
                    name="CodeVerification"
                    component={CodeVerification}
                    options={{
                      tabBarStyle: { display: "none" },
                    }}
                    headerShown={false}
                  />
                </>
              ) : authContext.businessAccount ? (
                <>
                
                  <Tab.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                    }}
                    headerShown={false}
                  />
                  <Tab.Screen
                    name="Appointments"
                    component={Appointments}
                    options={{}}
                    headerShown={false}
                  />
                </>
              ): <>
              
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarStyle: { display: "none" },
                }}
                headerShown={false}
              />
              <Tab.Screen
                name="AboutBusiness"
                component={AboutBusiness}
                options={{
                  tabBarStyle: { display: "none" },
                }}
                headerShown={false}
              />
            </> }
            </Tab.Navigator>
          </Box>
        </NavigationContainer>
      </NativeBaseProvider>
  
  );
}
