import requestClient from "../configs/configuration";
import { handleError } from "../lib/utilities";



export const signInApi = async ({email,password}:{email:string,password:string})=>{
 return await requestClient
   .post(`/users/login`, {
     email,
     password,
   })
   .catch(handleError);
}