import { View,Switch } from 'react-native'
import React,{useState,useEffect  } from 'react'
import { VStack, Text,Input, Button,Box, HStack, Flex } from 'native-base'
import {Formik, validateYupSchema} from 'formik'
import { loginSchema,registerSchema } from './validationSchemas.jsx/authentificationSchemas'
import axios from 'axios'

import { MaterialIcons } from '@expo/vector-icons'; 
import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'




const Authentification = ({navigation}) => {

    const [loginForm,setLoginForm]= useState(true)
    const [authError,setAuthError]=useState(false)
    const [authErrorMsg,setAuthErrorMsg]=useState("")

    const [businessAccount,setBusinessAccount]=useState(false)

  const toggleSwitch=()=>{
    setBusinessAccount(prevState=>!prevState)
  }

    const authContext=useContext(AuthContext)
    

    const register=(values)=>{
            axios({
                method:"POST",
                url:"https://rsm.globinary.io/api-v1/register",
                data:{
                    phone_number:values.phoneNumber,
                    password:values.password,
                    first_name:values.firstName,
                    last_name:values.lastName,
                    email_address:values.emailAddress,
                    type:businessAccount ? "business" : "client",
                }
            }).then(response=>{if(response.data.success === true){navigation.navigate('CodeVerification',{})} else {
              setAuthError(true);
              setAuthErrorMsg(response.data.msg);
              setTimeout(()=>{setAuthError(false)},5000);
             
            };console.log(response.data)}).catch(error=>console.log(error))
    }

    const login=(values)=>{
      axios({
        method:"POST",
        //url:"http://192.168.0.88:5000/api-v1/login",
        url:"https://rsm.globinary.io/api-v1/login",
    
        data:{
            phone_number:values.phoneNumber,
            password:String(values.password),
        }
    }).then(response=>{if(response.data.success=== false){
      setAuthError(true);
      setAuthErrorMsg(response.data.msg)
      setTimeout(()=>setAuthError(false),5000)
    }else {
      authContext.saveToken(
      response.data.access_token,
      )
      console.log(response.data)
      authContext.setBusinessAccount(response.data.user_info.type === 20 ? true : falase)
    }}).catch(error=>console.log(error))
    }
 
  return (
    <VStack px="5%" w="100%" h="90%" top="10%" bg="neutral.500" space="8" alignItems={"center"} justifyContent={"flex-start"}>
    <Text my="6" top="6" fontSize={"24"}  bold>RivalStailer</Text>
    {authError ? <HStack borderWidth="1" space="2" alignItems={"flex-start"}   p="4" borderColor={"accent.500"} bg="accent.500" rounded="2xl" mb="4" color="white"  fontSize={"md"}>
      <MaterialIcons  color="#fff"  name="error" size={24}  /><Text color="#fff" >{authErrorMsg}</Text>
    </HStack> : "" } 
    {loginForm === true ?  <Formik
    bg="blue.500"
    initialValues={{phoneNumber:'',password:''}}
    
    validationSchema={loginSchema}
    onSubmit={login}
    
    >
     {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
        <VStack w="100%" px="5%" alignItems={"center"} justifyContent="center" space="6">
        <Input
        w="90%"
            value = {values.phoneNumber}
            placeholder ="Numar de telefon"
            onChangeText={handleChange('phoneNumber')}
            onBlur={()=>setFieldTouched('phoneNumber')}
            rounded="xl"
            h="12"
            
            borderWidth="0"
            bg="primary.500"

        />
        <Input
        w="90%"
            value = {values.password}
            placeholder ="Parola"
            onChangeText={handleChange('password')}
            onBlur={()=>setFieldTouched('password')}
            rounded="xl"
            h="12"
            
            borderWidth="0"
            bg="primary.500"

        />
          <Button
         onPress={handleSubmit}
          bg="accent.500"
          w="60%"
          h="56px"
          rounded="2xl"
          >
            <Text color="white" textAlign={"center"}>Autentifica-te</Text>
        </Button>
        <Button
          bg="primary.500"
          w="60%"
          h="56px"
          rounded="2xl"
         onPress={()=>setLoginForm(false)}
          >
          <Text color="black" textAlign={"center"}>Inregistreaza-te</Text>
        </Button>
        <Text w="95%" textAlign='right'   underline color="#5274EF">Mi-am uitat parola.</Text>
        </VStack>
      
      
     )}
    </Formik> :    <Formik
    
    initialValues={{phoneNumber:'',password:'',firstName:'',lastName:'',emailAddress:'',type:0}}
    onSubmit={register}
    validationSchema={loginSchema}
    >
     {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
        <VStack w="100%" px="5%" alignItems={"center"} justifyContent="center" space="6">

<Input
        w="90%"
            value = {values.phoneNumber}
            placeholder ="Numar de telefon"
            onChangeText={handleChange('phoneNumber')}
            onBlur={()=>setFieldTouched('phoneNumber')}
            rounded="xl"
            h="12"
            
            borderWidth="0"
            bg="primary.500"

        />
        <Input
        w="90%"
            value = {values.password}
            placeholder ="Parola"
            onChangeText={handleChange('password')}
            onBlur={()=>setFieldTouched('password')}
            rounded="xl"
            h="12"
            
            borderWidth="0"
            bg="primary.500"

        />
        <Input
        w="90%"
            value = {values.firstName}
            placeholder ="Nume"
            onChangeText={handleChange('firstName')}
            onBlur={()=>setFieldTouched('firstName')}
            rounded="xl"
            h="12"
            
            borderWidth="0"
            bg="primary.500"

        />
        <Input
        w="90%"
            value = {values.lastName}
            placeholder ="Prenume"
            onChangeText={handleChange('lastName')}
            onBlur={()=>setFieldTouched('lastName')}
            rounded="xl"
            h="12"
            
            borderWidth="0"
            bg="primary.500"

        />
      
         <Input
        w="90%"
            value = {values.emailAddress}
            placeholder ="Adresa E-mail"
            onChangeText={handleChange('emailAddress')}
            onBlur={()=>setFieldTouched('emailAddress')}
            rounded="xl"
            h="12"
            
            borderWidth="0"
            bg="primary.500"

        />
        <HStack w="100%" justifyContent={"space-around"} px="6" alignItems="center" >
          <Text color="gray.500" flex="1" >
            {businessAccount ? "" : "Cont Client"}
            
          </Text>
          <Flex justifyContent="center" alignItems="center" flex="1">
          <Switch
        
        trackColor={{false:"#CECECE",true:"#FFFFFF"}}
        thumbColor={businessAccount ? "#FD4343" :"#CF4440"}
        onValueChange={toggleSwitch}
         value={businessAccount}
        />
          </Flex>
        
         <Text color="gray.500" flex="1">
         {businessAccount ?"Cont Business" : ""  }
          </Text>
        </HStack>
       
      
         
        <Button
        bg="accent.500"
          w="60%"
          h="56px"
          rounded="2xl"
            onPress={handleSubmit}
          >
          <Text color="white" textAlign={"center"}>Inregistreaza-te</Text>
        </Button>
         <Button
          onPress={()=>setLoginForm(true)}
          bg="primary.500"
          w="60%"
          h="56px"
          rounded="2xl"
          >
            <Text color="black" textAlign={"center"}>Autentifica-te</Text>
        </Button>
       
        </VStack>
      
      
     )}
     
    </Formik>}
    
    
    
    
    
    </VStack>
  )
  
}

export default Authentification