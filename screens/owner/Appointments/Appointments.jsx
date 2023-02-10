
import React,{useState,useEffect, useContext} from 'react'
import {Box,VStack,Text,HStack,Select} from 'native-base'


import axios from 'axios'
import { AuthContext } from '../../../contexts/AuthContext';

const Appointments = () => {

    const [appointments,setAppointments]=useState([]);

    const [loading,setLoading]=useState("false")

    const authContext = useContext(AuthContext)
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

    const AppointmentList=()=>{
      return (
        <VStack w="100%" px="5%" my="6"  space="8">
        {appointments.map((appointment)=>(
          <HStack key={appointment.key} bg="accent.500" py="5%"    rounded="xl">
            <VStack pl="10%" w="55%" space="2">
            <Text color="white" fontSize="xl">
                {appointment.name}
              </Text>
              <Text  color="white" fontSize="md">
                {appointment.client_name}
                {" "}
                {appointment.client_rating}
              </Text>
              <HStack my="2" space="2">
              <Text>
                ICON
              </Text>
              <Text>
                ICON
              </Text>
              <Text>
                ICON
              </Text>
              </HStack>
              
            </VStack>
          
            <VStack bg="white" w="40%" px="4%" py="2%" space="2" rounded="xl" h="85%"> 
              <Text fontSize="xl">
                16:00 - 16:30
              </Text>
              <HStack space="2">
                <Text>
                  100 lei
                </Text>
                <Text>
                  ICON
                </Text>
                <Text>
                  cash
                </Text>
              </HStack>
          </VStack>
          </HStack>
        ))}
        </VStack>

      )
    }

    const getData=(token)=>{
   
        axios({
           method:"GET",
           //url:"http://192.168.0.88:5000/api-v1/get/business/",
           url:"https://rsm.globinary.io/api-v1/get/business/4/appointments",
           headers:{
             "Authorization":`Bearer ${token}`,
             
           }
         }).then(response=>(setAppointments(response.data.appointments),console.log(response.data))).catch(error=>console.log(error))
       }

       useEffect(() => {
        authContext.getToken().then(token=>getData(token)).catch(error=>console.log(error))

       },[])
       

       return (
        <Box
          flexDirection="column"
          
          alignItems="center"
          justifyContent={"flex-start"}
          top="10"
          py="4"
          w="100%"
          h="100%"
          pb="12"
          
        >
          
            <Header/>
            <AppointmentList/>
          
          
    
          
        </Box>
      );
}

export default Appointments