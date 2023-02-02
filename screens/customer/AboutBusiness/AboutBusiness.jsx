import React, { useEffect, useState } from "react";
import {
  ScrollView,
  VStack,
  Box,
  Button,
  Flex,
  Menu,
  HStack,
  Text,
  Image,
  Divider,
  
} from "native-base";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import axios from "axios";


const AboutBusiness = ({route,navigation}) => {
  
  const businessId =  route.params.businessId;
  const rating = 4.5;

  const [businessData,setBusinessData]=useState({})
 

  const [dataFetched,setDataFetched]=useState(false)

  const getBusinessData= async(businessId)=>{
     await axios({
        method:"GET",
        url:`https://rsm.globinary.io/api-v1/get/business/${businessId}`
      }).then(response=>setBusinessData(response.data.business)).catch(error=>console.log(error))
  }

 
  useEffect(()=>{
    setDataFetched(false);
  getBusinessData(businessId)
  
    setDataFetched(true)
  },[])


  const Header = () => {
    return (
      <HStack
        w="100%"
        h="16"
        alignItems="center"
        justifyContent={"center"}
       
       
      >
        <Button onPress={()=>navigation.goBack()} position="absolute" left="0" bg="none"  w="16" h="12">
        <Ionicons  name="chevron-back" size={22} color="black" />
        </Button>
        <Text  pr="4"   fontSize={"md"}> Despre serviciu</Text>

      </HStack>
    );
  };

  const BusinessImage = () => {
    return <Box bg="gray.500" w="340px" h="280px" rounded="2xl" my="4"  >
      <Image rounded="2xl" source={{
      uri: "https://picsum.photos/340/280"
    }} alt="Alternate Text" size="full"  />
    </Box>;
  };

  const BusinessDescription = () => {
    return (
      <VStack
        w="100%"
        fontSize="sm"
        
      
        alignItems="center"
        justifyContent={"center"}
        
      >
      <Divider bg="accent.500" h="1" rounded="xl" />
       
        <Text px="5%"   my="2" fontSize="lg"  w="100%"  >{businessData?.name}</Text>
            <HStack  w="100%" my="2">
            <HStack space="1" flex="1"  justifyContent={"center"}
            alignItems="center">
           {Array.from({length:Math.floor(rating)}).map((_,index)=>(
            <FontAwesome key={index} name="star" size={18} color="#FFB800" />

           ))}
           {rating % Math.floor(rating) >0 ? <FontAwesome5 name="star-half-alt" size={16} color="#FFB800"  /> : ""}
           <Text>{rating}</Text>
           </HStack>
            
           <Text flex="1"    fontSize="sm"  alignItems="flex-end">
            strada {businessData?.street}, {businessData?.city}
          </Text>
            </HStack>
         
            

          
          
        
      </VStack>
    );
  };


  const AboutService = () => {
    return (
      <Box w="90%" my="6"  >
        <Text fontSize="md" >Despre {businessData.name}</Text>
        <Text fontSize="xs" my="2">
         {businessData.description}
        </Text>
      </Box>
    );
  };

  const ServiceList = () => { 
    return (
     <VStack  w="100%" my="4" pb="20"  >
        <Text fontSize="md" pb="4" px="5%" >Lista Servicii </Text>
        <VStack alignItems={"center"} justifyContent="center" space="4" >
        {dataFetched === true ? (
            businessData.services?.map((service)=>(
              <HStack key={service.id} w="100%" bg="primary.500" px="2" py="4" rounded="xl"  justifyContent={"space-between"} alignItems="center">
                <Box ml="1%" bg="accent.500" w="4%"  h="1" rounded="xl" ></Box>
                <VStack py="1" rounded="xl" w="55%" alignItems={"center"} justifyContent="space-between" key={service.id}  h="16">
                <Text fontSize={"md"}>{service.name}</Text>
                <Text fontSize={"sm"} color="accent.500">{service.price} ron</Text>
                
              </VStack>
              <Button bg="accent.500" h="100%" w="40%" rounded="2xl"  >Programeaza-te</Button>
              </HStack>
             
            ))

        ) : <Text>Loading...</Text>}
        </VStack>
       
        
      </VStack>
    );
  };

  return (
    <Flex w="100%"  px="5%" >
 <ScrollView  w="100%"  pt="16"  contentContainerStyle={{justifyContent:"center"}} showsVerticalScrollIndicator={false}>
       
       <Header />
       <BusinessImage />
       <BusinessDescription />
       <AboutService />
       <ServiceList />
       
      
       
     </ScrollView>
    </Flex>
     
    
  );
};

export default AboutBusiness;
