import { GET_USER_ORG } from "src/constrants/action";
import httpServices from "src/services/httpServices";

export const apiGetMembers = async (body) => {
  return await httpServices.post(GET_USER_ORG, body);
};

export const apiUnActiveMembers = async (id) => {
  return await httpServices.put(`${GET_USER_ORG}/${id}`);
};

