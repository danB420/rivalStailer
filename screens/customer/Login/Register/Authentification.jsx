import { View } from 'react-native'
import React,{useState,useEffect  } from 'react'
import { VStack, Text,Input, Button } from 'native-base'
import {Formik, validateYupSchema} from 'formik'
import { loginSchema,registerSchema } from './validationSchemas.jsx/authentificationSchemas'
import axios from 'axios'


const Authentification = ({navigation}) => {

    const [loginForm,setLoginForm]= useState(true)

    const onSubmit=(values)=>{
            axios({
                method:"POST",
                url:"https://rsm.globinary.io/api-v1/register",
                data:{
                    phone_number:values.phoneNumber,
                    password:values.password,
                    first_name:values.firstName,
                    last_name:values.lastName,
                    email_address:values.emailAddress
                }
            }).then(response=>{if(response.data.success === true){navigation.navigate('CodeVerification',{})};console.log(response.data)}).catch(error=>console.log(error))
    }
 
  return (
    <VStack px="5%" w="100%" h="90%" top="10%" bg="neutral.500" space="8" alignItems={"center"} justifyContent={"flex-start"}>
    <Text my="10" fontSize={"24"} bold>RivalStailer</Text>
    {loginForm === true ?  <Formik
    bg="blue.500"
    initialValues={{phoneNumber:'',password:''}}
    
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
          <Button
          type="submit"
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
    
    initialValues={{phoneNumber:'',password:'',firstName:'',lastName:'',emailAddress:''}}
    onSubmit={onSubmit}
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