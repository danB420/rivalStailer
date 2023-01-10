import React, { useEffect, useState } from "react";
import { NativeBaseProvider, Box, Text } from "native-base";
import Home from "./screens/customer/HomeScreen/Home";
import AboutBusiness from "./screens/customer/AboutBusiness/AboutBusiness";

export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}
