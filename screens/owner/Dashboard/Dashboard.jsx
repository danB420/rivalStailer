import { Box, Flex, HStack, Select, Text, VStack,Pressable } from "native-base";
import React,{useState,useEffect, useContext} from "react";
import axios from 'axios'

import { FontAwesome5 } from '@expo/vector-icons'; 
import { AuthContext } from "../../../contexts/AuthContext";

import { MaterialIcons } from '@expo/vector-icons'; 



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
            fontSize="md"S
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

const InfoStack=()=>{
  return (
 <VStack w="85%" my="8">
        <HStack  w="100%" rounded="xl">
          <Box justifyContent={"center"} alignItems="center" flex="1.2" bg="accent.500"  h="20" roundedLeft="xl">
          
          <Box justifyContent={"center"} alignItems="center" rounded="xl" bg="white" w="70%" h="70%">
          <FontAwesome5  name="calendar-alt" size={24} color="#FD4343" />
            </Box>
          </Box>
          <Box justifyContent={"flex-start"} py="8%"  alignItems="center" bg="accent.500" flex="4" roundedRight={'xl'} roundedBottomLeft="xl" h="32">
            <Text m="1" color="white" fontSize={"md"}>
           
            </Text>
            <Text m="1" color="white" >
             De la 8:00 la 16:00
            </Text>
          </Box>
        </HStack>

        </VStack>
  )
}



const Dashboard = () => {
  const [businesses,setBusinesses]=useState()
  
  const [hasBusinesses,setHasBusinesses]=useState(false);

  const authContext= useContext(AuthContext);


  const getBussinesses=(token)=>{
    axios({
      method:"GET",
      url:`${process.env.BASE_URL}/b/get/first-business`,
      headers:{
        "Authorization":`Bearer ${token}`
      }
    }).then(response=>(setBusinesses(response.data.businesses),console.log(response.data.businesses))).then(setHasBusinesses(businesses?.length > 0))
  }

  useEffect(()=>{
   authContext.getToken().then(token=>getBussinesses(token)).then(()=>console.log(hasBusinesses))
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
        {hasBusinesses ===false ?
        
        <Pressable my="40%" h='20%' w='40%' bg="accent.500" rounded="xl" justifyContent="center" alignItems="center"  onPress={()=>console.log("pressed")}>
         
          <MaterialIcons name="add-business" size={36} color="white" />
          
          
        </Pressable>
        
        
        :
        <>
          <InfoStack/>
        </>}

     
       
       

      
    </Box>
  );
};

export default Dashboard;
