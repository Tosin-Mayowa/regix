import requestClient from "../configs/configuration";
import { handleError } from "../lib/utilities";

export const getUserByEmail = async (email:string) => {
  return await requestClient
    .get(`/users/${email}`)
    .catch(handleError);
};

export const getUserByRole = async () => {
  return await requestClient.get(`/users/me`).catch(handleError);
};
