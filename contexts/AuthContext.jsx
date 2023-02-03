import React,{createContext,useState} from 'react'
import  * as SecureStore from 'expo-secure-store'


const AuthContext = createContext(null
  
)
const {Provider} = AuthContext;

const AuthProvider =({children})=>{

const [authenticated,setAuthenticated]=useState(false)
const [businessAccount,setBusinessAccount]=useState(false)

async function saveToken(value){
    await SecureStore.setItemAsync("accessToken",value)
    setAuthenticated(true)
    
}
async function logout(){
    await SecureStore.deleteItemAsync("accessToken")
    setAuthenticated(false);
}

 function getToken(){
     
    return SecureStore.getItemAsync("accessToken")
     
}



return (
    <Provider value={{
       authenticated,saveToken,getToken,businessAccount,setBusinessAccount
    }}>
        {children}
    </Provider>
)


}

export {AuthContext,AuthProvider};