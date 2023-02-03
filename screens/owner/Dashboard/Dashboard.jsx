
import {Box,Flex,Select,Text} from 'native-base'
import React from 'react'

const Dashboard = () => {
  return (
    <Box
    flexDirection="column"
    alignItems="center"
    justifyContent={"center"}
    top="10"
    py="4"
    w="100%"
    h="100%"
    
    pb="12">
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
    </Box>
  )
}

export default Dashboard