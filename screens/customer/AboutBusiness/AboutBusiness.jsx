import React from "react";
import {
  ScrollView,
  VStack,
  Box,
  Button,
  Flex,
  Menu,
  HStack,
  Text,
} from "native-base";

const AboutBusiness = () => {
  const MenuButton = () => {
    return (
      <Box
        w="100%"
        h="16"
        bg="blue.400"
        alignItems="flex-end"
        justifyContent="center"
        px="6"
      >
        <Button w="16" h="16">
          | | |
        </Button>
      </Box>
    );
  };

  const Header = () => {
    return (
      <HStack
        w="100%"
        h="16"
        bg="blue.400"
        px="6"
        alignItems="center"
        space="20"
      >
        <Button w="16" h="16">
          v
        </Button>
        <Text>Despre serviciu</Text>
      </HStack>
    );
  };

  const BusinessImage = () => {
    return <Box w="90%" h="25%" bg="green.500" mx="5%" my="4"></Box>;
  };

  const BusinessDescription = () => {
    return (
      <VStack
        w="100%"
        fontSize="sm"
        px="5%"
        alignItems="center"
        justifyContent="center"
      >
        <HStack w="100%" h="16">
          <VStack w="50%" bg="purple.400" space="2" justifyContent="center">
            <Text fontSize="md">Golden Lock</Text>
            <Text>* * * * * 4.5</Text>
          </VStack>
          <Text fontSize="xs" w="50%" alignItems="flex-end">
            strada Vasile Lucaciu, Baia Mare
          </Text>
        </HStack>
      </VStack>
    );
  };

  const ServicesPreview = () => {
    return (
      <Box w="100%" px="5%" my="4" justifyContent="center">
        <Text> Servicii oferite</Text>
        <ScrollView mt="2" horizontal={true}>
          <Box m="2" w="12" h="12" bg="purple.500"></Box>
          <Box m="2" w="12" h="12" bg="purple.500"></Box>
          <Box m="2" w="12" h="12" bg="purple.500"></Box>
          <Box m="2" w="12" h="12" bg="purple.500"></Box>
          <Box m="2" w="12" h="12" bg="purple.500"></Box>
          <Box m="2" w="12" h="12" bg="purple.500"></Box>
          <Box m="2" w="12" h="12" bg="purple.500"></Box>
          <Box m="2" w="12" h="12" bg="purple.500"></Box>
        </ScrollView>
      </Box>
    );
  };

  const AboutService = () => {
    return (
      <Box w="100%" px="5%">
        <Text fontSize="md">Despre Golden Lock</Text>
        <Text fontSize="xs" my="2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere
          amet repellendus maiores, veniam, autem eaque ut nobis sed doloremque
          suscipit, debitis aut laudantium totam facilis officiis et magni
          vitae?
        </Text>
      </Box>
    );
  };

  const ServiceList = () => {
    return (
      <VStack h="100%" px="5%">
        <Box h="20" w="100%" bg="white"></Box>
      </VStack>
    );
  };

  return (
    <Box w="100%" h="200%">
      <ScrollView bg="gray.500" pt="16" w="100%">
        <MenuButton />
        <Header />
        <BusinessImage />
        <BusinessDescription />
        <ServicesPreview />
        <AboutService />
        <ServiceList />
      </ScrollView>
    </Box>
  );
};

export default AboutBusiness;
