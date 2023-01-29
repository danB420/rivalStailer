import React,{createContext,useState} from 'react'
import  * as SecureStore from 'expo-secure-store'


const AuthContext = createContext(null
  
)
const {Provider} = AuthContext;

const AuthProvider =({children})=>{

const [authenticated,setAuthenticated]=useState(false)
const [authToken,setAuthToken]=useState("")

async function saveToken(value){
    await SecureStore.setItemAsync("accessToken",value)
    setAuthenticated(true)
    setAuthToken()
}
async function logout(){
    await SecureStore.deleteItemAsync("accessToken")
    setAuthenticated(false);
}

async function getToken(){
    let result = await SecureStore.getItemAsync("accessToken")
    if(result)
    setAuthToken(result)
    else 
    alert("NO KEY")
}



return (
    <Provider value={{
       authenticated,saveToken,getToken,authToken
    }}>
        {children}
    </Provider>
)


}

export {AuthContext,AuthProvider};