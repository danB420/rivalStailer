import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Flex,
  Box,
  Select,
  Text,
  Input,
  HStack,
  Pressable,
  Divider,
  VStack,
} from "native-base";
import { ScrollView,Image } from "native-base";
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { async } from "q";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const Home = ({navigation}) => {
  const [businessData,setBusinesses]=useState([]);
  const [loading,setLoading]=useState("false")

  const authContext = useContext(AuthContext)

  
  useEffect(()=>{
  
    setLoading(true);
    if(authContext.authToken !="")
   getData();
  setLoading(false);
 

  },[])


  const getData=async()=>{
   
    await axios({
      method:"GET",
      //url:"http://192.168.0.88:5000/api-v1/get/all-businesses",
      url:"https://rsm.globinary.io/api-v1/get/all-businesses",
      headers:{
        "Authorization":`Bearer ${authContext.authToken}`,
        
      }
    }).then(response=>(setBusinesses(response.data.businesses),console.log(response.data))).catch(error=>console.log(error))
  }

  
  const ServiceSelect = (props) => {
    return (
      <Pressable

       
        rounded="full"
        minWidth="24"
       m="1"
       p="1"
        alignItems="center"
        justifyContent="center"
        h="8"
        fontSize="md"
        bg="accent.500"
       
      >
        <Text w="100%" textAlign={"center"}  color="white">{props.name}</Text>
      </Pressable>
    );
  };

  const BusinessCard = (props) => {
    return (
      <Pressable
        bg="white"
        h="260px"
        w="320px"
        alignItems="center"
        rounded="2xl"
        px="4"
        py="4"
        mx="2"r
        justifyContent={"center"}
        onPress={props.onPress}
      >
        <Pressable bg="neutral.500" h="130px" w="280px" rounded="2xl"><Image rounded="2xl" source={{
      uri: "https://picsum.photos/280/130"
    }} alt="Alternate Text" size="full"  />
    
    <HStack rounded="md" w="12" h="6"  alignItems={"center"} justifyContent={"center"} textAlign={"center"}  bg="white" position="absolute" bottom="3" left="3"  >
    <FontAwesome name="star" size={8} color="#FFB800" /><Text  >{" "+ props.rating } </Text>
      
      </HStack>
    </Pressable>
       
        <HStack
          my="2"
          w="96%"
          h="40px"
          
          alignItems="center"
          justifyContent="space-between"
        >
          <Text textAlign="center" fontSize="md" isTruncated    flex="3">{props.name}</Text>
          <Text textAlign="center" fontSize="md"   flex="2" color="accent.500">
          <FontAwesome5 name="arrow-alt-circle-up" size={16} color="accent.500" /> {props.minPrice + " lei"}
          </Text>
          <Text>{props.id}</Text>
        </HStack>
        <Divider bg="muted.800" my="1"></Divider>
        
        <Text isTruncated  w="95%" my="1" fontSize="sm" color="gray.400">
        {props.city}{", "}
          {"Strada " + props.street}{" "}
          { props.street_number} 
          
        </Text>
       

        
       
      </Pressable>
    );
  };

  const ServiceNearbyCard = (props) => {
    return (
      <Pressable bg="white" h="32" w="280px" rounded="3xl" p="4" m="2">
        <HStack w="100%">
        <Pressable bg="gray.500" h="92px" w="92px" rounded="2xl"><Image rounded="2xl" source={{
      uri: "https://picsum.photos/92/92"
    }} alt="Alternate Text" size="full"  ></Image></Pressable>
    
          <VStack px="4">
            <Text isTruncated  w="80%">{props.name}</Text>
            <Text color="gray.400" fontSize="xs">
             {props.city} , {props.county}
            </Text>
            <VStack mt="2" justifyContent="space-between" space="2" >
              <Text fontSize="xs" color="accent.">
                Incepand de la {props.minPrice}
              </Text>
             <HStack space="1"  alignItems="center">
           {Array.from({length:Math.floor(props.rating)}).map((_,index)=>(
            <FontAwesome key={index} name="star" size={12} color="black" />

           ))}
           {props.rating % Math.floor(props.rating) >0 ? <FontAwesome5 name="star-half-alt" size={10} color="black" /> : ""}
          
           
            
             </HStack>
            </VStack>
          </VStack>
        </HStack>
      </Pressable>
    );
  };

  return (
    <Box
      flexDirection="column"
      alignItems="center"
      top="10"
      py="4"
      w="100%"
      h="100%"
      
      pb="12"
    >
     <ScrollView w="100%" h="100%" contentContainerStyle={{alignItems:"center",justifyContent:"center"}} showsVerticalScrollIndicator={false}>
      {/*Logo and City select*/}
     <Flex
        flexDirection="row"
        w="85%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Select
          rounded="full"
          minWidth="160"
          accessibilityLabel="Alege oras"
          placeholder="Alege oras"
          _selectedItem={{
            bg: "teal.600",
          }}
          fontSize="xs"
          h="10"
        >
          <Select.Item label="Baia Mare" value="bm" />
          <Select.Item label="Cluj Napoca" value="cj" />
          <Select.Item label="Bucuresti" value="b" />
        </Select>
        <Text bold fontSize="2xl">
          RivalStailer
        </Text>
      </Flex>
      

      {/*Search Bar and Horizontal Scroll Select*/}
      <Input w="85%" rounded="2xl" h="12" my="8" placeholder="Caută"></Input>
      <Box w="90%"  h="12">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ServiceSelect name={"Frizerie"}/>
          <ServiceSelect name={"Hairstylist"}/>
          <ServiceSelect name={"Manichiura"}/>
          <ServiceSelect name={"Frizerie"}/>
          <ServiceSelect name={"Hairstylist"}/>
          <ServiceSelect name={"Manichiura"}/>
          </ScrollView>
          
  
          
          
           
         
        
      </Box>

      <Box w="85%" h="340px">
        <Text mt="2" pl="4" mb="4" fontSize="md">
          Servicii Recomandate
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
       { loading ? <Text>LOADING ... </Text> : businessData?.map(business=>(<BusinessCard onPress={()=>{navigation.navigate('AboutBusiness',{"businessId":business.id})}} rating={business.rating} minPrice={business.min_price} key={business.id} id={business.id}  city={business.city}  name={business.name}  street={business.street} street_number={business.street_number}/>)) }
        </ScrollView>
      </Box>
      <Box  w="320px" h="200px"  >
        <Text mt="2" pl="4" mb="4" fontSize="md">
          Servicii in apropierea ta
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} h="200px" w="100%"  >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
       { loading ? <Text>LOADING ... </Text> : businessData?.map(business=>( <ServiceNearbyCard rating={business.rating} key={business.id} name={business.name} minPrice={business.min_price} city={business.city} county={business.county}></ServiceNearbyCard>)) }
        </ScrollView>
         
          
         
          
          
        </ScrollView>
      </Box>
      
     </ScrollView>
      
      
     
    </Box>
  );
};

export default Home;
