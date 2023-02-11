import {Box,HStack,VStack,Text,Select} from 'native-base'
import React from 'react'


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
  return (
   <Box 
   flexDirection="column"
      
   alignItems="center"
   justifyContent={"flex-start"}
   top="10"
   py="4"
   w="100%"
   h="100%"
   pb="12">
        <Header/>
   </Box>
  )
}

export default BusinessRegister