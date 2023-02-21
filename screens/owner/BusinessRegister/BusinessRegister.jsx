
  import React,{useState,useEffect  } from 'react'
  import { VStack, Text,Input, Button,Box, HStack, Flex,Select,ScrollView } from 'native-base'
  import {Formik, validateYupSchema} from 'formik'
  import { businessRegisterSchema } from '../../customer/Login/Register/validationSchemas/businessRegisterSchema'
  import axios from 'axios'
  
  import { MaterialIcons } from '@expo/vector-icons'; 
  import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

const Header =()=>{
    return (
      <HStack  w="100%" py="2%">
          <Box top="3%" w="50%" >
            <Text
              bg="accent.500"
              color="white"
              py="8%"
              px="5%"
              roundedRight="xl"
              fontSize="md"
            >
              Bine ai venit, nume!
            </Text>
          </Box>
          <VStack  justifyContent={"center"} alignItems="center"  w="50%" py="1%" space="2" >
            <Text  bold fontSize="2xl">
              RivalStailer
            </Text>
            <Select
              rounded="full"
              w="40"
              accessibilityLabel="Alege business"
              placeholder="Alege business"
              _selectedItem={{
                bg: "teal.600",
              }}
              bg="white"
              fontSize="xs"
              h="8"
              borderWidth={0}
            >
              <Select.Item label="Golden Lock" value="gl" />
              <Select.Item label="Silver Key" value="sk" />
              <Select.Item label="Bronze Cup" value="b" />
            </Select>
          </VStack>
          
      </HStack>
  
    )
  }


const BusinessRegister = () => {
  
  
      const [authError,setAuthError]=useState(false)
      const [authErrorMsg,setAuthErrorMsg]=useState("")
    const [authToken,setAuthToken]=useState("")
      const [businessAccount,setBusinessAccount]=useState(false)
  
      const authContext=useContext(AuthContext)
      
     useEffect(()=>{
      authContext.getToken().then(token=>setAuthToken(token)).then(()=> console.log(authToken))
     
     },[])
  
      const register=(values)=>{
        console.log(values),
              axios({
                  method:"POST",
                  url:`${process.env.BASE_URL}/b/post/new/business`,
                  data:{
                      name:values.name,
                      city:values.city,
                      county:values.county,
                      street:values.street,
                      street_number:values.streetNumber,
                      description:values.description,
                      phone_number:values.phoneNumber,
                      email_address:values.emailAddress,
                      payment_method:values.paymentMethod,
                  },
                  headers:{
                    Authorization:`Bearer ${authToken}`
                  }
              }).then(response=>console.log(response.data)).catch(error=>console.log(error.response))
      }
  
  
  
   
    return (
      
      <VStack  w="100%" h="92%" top="5%"  bg="neutral.500" space="2" alignItems={"center"} justifyContent={"flex-start"}>
        <Header/>
      
      {authError ? <HStack borderWidth="1" space="2" alignItems={"flex-start"}   p="4" borderColor={"accent.500"} bg="accent.500" rounded="2xl" mb="4" color="white"  fontSize={"md"}>
        <MaterialIcons  color="#fff"  name="error" size={24}  /><Text color="#fff" >{authErrorMsg}</Text>
      </HStack> : "" } 
         <Formik
      
      initialValues={{name:"",
        city:"",
        county:"",
        street: "",
        streetNumber:"",
        description:"",
        phoneNumber:"",
        emailAddress:"",
        paymentMethod:"cash",}}
      onSubmit={register}
      validationSchema={businessRegisterSchema}
      >
       {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
        <ScrollView overScrollMode="never"  w="90%"  showsVerticalScrollIndicator={false}>
          <VStack w="100%" h="100%" py="5%"   alignItems={"center"} justifyContent="center" space="6">
            
   <Input
          w="90%"
              value = {values.name}
              placeholder ="Nume afacere"
              onChangeText={handleChange('name')}
              onBlur={()=>setFieldTouched('name')}
              rounded="xl"
              h="12"
              
              borderWidth="0"
              bg="primary.500"
  
          />
           <Input
          w="90%"
              value = {values.county}
              placeholder ="Judet"
              onChangeText={handleChange('county')}
              onBlur={()=>setFieldTouched('county')}
              rounded="xl"
              h="12"
              
              borderWidth="0"
              bg="primary.500"
  
          />
           <Input
          w="90%"
              value = {values.city}
              placeholder ="Localitate"
              onChangeText={handleChange('city')}
              onBlur={()=>setFieldTouched('city')}
              rounded="xl"
              h="12"
              
              borderWidth="0"
              bg="primary.500"
  
          />
           <Input
          w="90%"
              value = {values.street}
              placeholder ="Strada"
              onChangeText={handleChange('street')}
              onBlur={()=>setFieldTouched('street')}
              rounded="xl"
              h="12"
              
              borderWidth="0"
              bg="primary.500"
  
          />
              <Input
          w="90%"
              value = {values.streetNumber}
              placeholder ="Numar"
              onChangeText={handleChange('streetNumber')}
              onBlur={()=>setFieldTouched('streetNumber')}
              rounded="xl"
              h="12"
              
              borderWidth="0"
              bg="primary.500"
  
          />
          
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
              value = {values.emailAddress}
              placeholder ="Adresa E-mail"
              onChangeText={handleChange('emailAddress')}
              onBlur={()=>setFieldTouched('emailAddress')}
              rounded="xl"
              h="12"
              
              borderWidth="0"
              bg="primary.500"
  
          />
          <Input
              w="90%"
              h="120px"
              value = {values.description}
              placeholder ="Descriere (minim 40 caractere)"
              onChangeText={handleChange('description')}
              onBlur={()=>setFieldTouched('description')}
              rounded="xl"
             
              
              borderWidth="0"
              bg="primary.500"
  
          />
           <Input
              w="90%"
              h="12"
              value = {values.paymentMethod}
              placeholder ="Metoda de plata"
              onChangeText={handleChange('paymentMethod')}
              onBlur={()=>setFieldTouched('paymentMethod')}
              rounded="xl"
             
              
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
            <Text color="white" textAlign={"center"}>Inregistreaza Business</Text>
          </Button>
         
          
          </VStack>
          </ScrollView>
        
        
       )}
       
      </Formik>
      
      
      
      
      
      </VStack>
    )
    
  }


export default BusinessRegister