import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'

const Appointments = () => {

    const [businessData,setBusinesses]=useState([]);

    const [loading,setLoading]=useState("false")

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
    <View>
      <Text>Appointments</Text>
    </View>
  )
}

export default Appointments