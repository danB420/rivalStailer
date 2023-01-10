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
import { ScrollView } from "native-base";

const Home = () => {
  const getData = async () => {
    await axios({
      method: "GET",
      url: "http://192.168.0.105:5000/api-v1/get/all-businesses",
    })
      .then((response) => setBusinessData(response.data))
      .catch((error) => console.log(error));
  };

  const [businessData, setBusinessData] = useState("");
  useEffect(() => {
    getData();
    console.log(businessData);
  }, []);

  const ServiceSelect = (props) => {
    return (
      <Pressable
        borderWidth="1"
        m="2"
        rounded="full"
        minWidth="20"
        p="1"
        alignItems="center"
        justifyContent="center"
        h="8"
        fontSize="xs"
      >
        {props.children}
      </Pressable>
    );
  };

  const BusinessCard = (props) => {
    return (
      <Pressable
        bg="gray.300"
        h="100%"
        w="80"
        alignItems="center"
        rounded="3xl"
        p="4"
        mx="4"
      >
        <Pressable bg="gray.500" h="60%" w="100%" rounded="3xl"></Pressable>
        <HStack
          my="2"
          w="90%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize="md">Golden Lock</Text>
          <Text fontSize="sm" color="red.500">
            Incepand de la 60 lei
          </Text>
        </HStack>
        <Divider bg="muted.800" my="1"></Divider>
        <Text w="90%" my="1" fontSize="xs" color="gray.400">
          {props.street}
          {props.street_number}
          {props.city}
        </Text>
      </Pressable>
    );
  };

  const ServiceNearbyCard = () => {
    return (
      <Pressable bg="gray.100" h="32" w="95%" rounded="3xl" p="4" m="2">
        <HStack w="100%">
          <Box h="24" w="24" bg="gray.400" rounded="2xl"></Box>
          <VStack px="4">
            <Text>Silver Key</Text>
            <Text color="gray.400" fontSize="xs">
              Baia Mare , Romania
            </Text>
            <HStack mt="6" justifyContent="space-between" space="8">
              <Text fontSize="xs" color="red.500">
                Incepand de la 60 lei
              </Text>
              <Text> 4.7*</Text>
            </HStack>
          </VStack>
        </HStack>
      </Pressable>
    );
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      top="16"
      my="4"
      w="100%"
      h="100%"
    >
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
      {/*Logo and City select*/}

      {/*Search Bar and Horizontal Scroll Select*/}
      <Input w="85%" rounded="2xl" h="12" my="8" placeholder="Caută"></Input>
      <Box w="80%" h="12">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ServiceSelect>
            <Text>Frizerie</Text>
          </ServiceSelect>
          <ServiceSelect>
            <Text>Hairstylist</Text>
          </ServiceSelect>
          <ServiceSelect>
            <Text>Make-up </Text>
          </ServiceSelect>
          <ServiceSelect>
            <Text>Manichiura</Text>
          </ServiceSelect>
          <ServiceSelect>
            <Text>Frizerie</Text>
          </ServiceSelect>
          <ServiceSelect>
            <Text>Hairstylist</Text>
          </ServiceSelect>
          <ServiceSelect>
            <Text>Make-up</Text>
          </ServiceSelect>
          <ServiceSelect>
            <Text>Manichiura</Text>
          </ServiceSelect>
        </ScrollView>
      </Box>

      <Box w="85%" h="30%" m="4">
        <Text mt="2" pl="4" mb="4" fontSize="md">
          Servicii Recomandate
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {businessData.businesses.map((business) => {
            <BusinessCard
              city={business.city}
              street={business.street}
              streetNumber={business.street_number}
            />;
          })}
        </ScrollView>
      </Box>
      <Box w="85%" h="30%" m="4">
        <Text mt="2" pl="4" mb="4" fontSize="md">
          Servicii in apropierea ta
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <ServiceNearbyCard></ServiceNearbyCard>
          <ServiceNearbyCard></ServiceNearbyCard>
          <ServiceNearbyCard></ServiceNearbyCard>
          <ServiceNearbyCard></ServiceNearbyCard>
        </ScrollView>
      </Box>
    </Flex>
  );
};

export default Home;
