import { View, } from 'react-native'
import React, { useState,useEffect } from 'react'
import { VStack,Input,Text } from 'native-base'
import axios from 'axios'

const CodeVerification = ({navigation}) => {

    
    const [receivedCode,setReceivedCode]=useState("");

    const [value,onChangeText]=useState("")

    const verifyCode=()=>{
        axios({
            method:"POST",
            url:`${process.env.BASE_URL}/confirm`,
            data:{
                confirmation_code:value
            }
        }).then(response=>console.log(response.data)).catch(error=>console.log(error))
    }
    useEffect(()=>{
            if(value.length === 6)
            verifyCode();
    },[value])
  return (
    <VStack w="100%" h="100%" alignItems={"center"} justifyContent={"center"} space="4">
        <Text bold fontSize={"16"}>Introdu codul trimis prins SMS la *****</Text>
        <Input
        w="90%"
        borderWidth={"0"}
        bg="white"
        rounded="2xl"
        keyboardType='numeric'
        onChangeText={value=>onChangeText(value)}
        value={value}
        
                >
        </Input>
    </VStack>
  )
}

export default CodeVerification