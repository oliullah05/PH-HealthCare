import { authKey } from "@/constants/authKey"
import { setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo = (accessToken:string)=>{
setToLocalStorage(authKey,accessToken)
}