
import React,{useState,useEffect} from 'react'
import {Box,VStack,Text,HStack,Select} from 'native-base'


import axios from 'axios'

const Appointments = () => {

    const [businessData,setBusinesses]=useState([]);

    const [loading,setLoading]=useState("false")

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

    const getData=(token)=>{
   
        axios({
           method:"GET",
           //url:"http://192.168.0.88:5000/api-v1/get/all-businesses",
           url:"https://rsm.globinary.io/api-v1/get/all-businesses",
           headers:{
             "Authorization":`Bearer ${token}`,
             
           }
         }).then(response=>(setBusinesses(response.data.businesses),console.log(response.data))).catch(error=>console.log(error))
       }

       useEffect(() => {
    
         
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
            <Text>
              CACA PISU
            </Text>
          
    
          
        </Box>
      );
}

export default Appointments