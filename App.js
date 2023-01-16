import React, { useEffect, useState } from "react";
import { NativeBaseProvider, Box, Text,extendTheme } from "native-base";
import Home from "./screens/customer/HomeScreen/Home";
import AboutBusiness from "./screens/customer/AboutBusiness/AboutBusiness";

export default function App() {
  const theme = extendTheme({
    colors: {
      primary:{
        500:"#FFFFFF"
      },
      neutral:{
        500:"#F4F3EF"
      },
      accent:{
        500:"#ff615c"
      }
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'light',
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Box w="100%" h="100%" justifyContent={"center"} alignItems="center" bg="neutral.500">

      <Home />
      </Box>

    </NativeBaseProvider>
  );
}
