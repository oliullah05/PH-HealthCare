import { authKey } from "@/constants/authKey"
import { decodedToken } from "@/utils/jwt"
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/local-storage"
import { JwtPayload } from "jwt-decode"

export const storeUserInfo = (accessToken:string)=>{
setToLocalStorage(authKey,accessToken)
}

export const getUserInfo = ()=>{
   const authToken =  getFromLocalStorage(authKey)
  if(authToken){
    const decodedData:any= decodedToken(authToken)
    return {...decodedData,role:decodedData?.role.toLowerCase()}
  }
  return
}

export const isloggedIn = ()=>{
    const authToken =  getFromLocalStorage(authKey)
    if(authToken){
        return !!authToken
    }
}

export const removeUser = ()=>{
  return  removeFromLocalStorage(authKey)
}