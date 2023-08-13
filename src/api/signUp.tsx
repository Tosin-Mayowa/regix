import requestClient from '../configs/configuration';
import {handleError} from '../lib/utilities'
import {Role} from '../lib/utilities'

type IRegister= {
      fullName?:string,
      email?:string,
      role?:Role,
      company_name?:string,
      company_phone_num?:string,
      company_email?:string,
      company_address?:string,
      state?:string,
      country?:string,
      password?:string,
      isActive?:boolean
    } 


export const signUpApi =async ({
  fullName,
  email,
  role,
  company_name,
  company_phone_num,
  company_email,
  company_address,
  state,
  country,
  password,
  isActive,
}: IRegister) => {
 return await requestClient
    .post(`/users/register`,{
  fullName,
  email,
  role,
  company_name,
  company_phone_num,
  company_email,
  company_address,
  state,
  country,
  password,
  isActive,
}).catch(handleError);
};