import { signin, Profile, GET_TODOS_URL, User } from "src/constrants/action";
import httpServices from "src/services/httpServices";

export const apiSignin = async (body) => {
  return await httpServices.post(signin, body);
};
const user = JSON.parse(window.localStorage.getItem("userSPRS"));
export const apiGetProfile = async () => {
  return await httpServices.get(Profile);
  // return fetch(Profile, {
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers": "*",
  //     "Access-Control-Allow-Methods": "*",
  //     Authorization: `Bearer ${user}`,
  //   },
  // }).then((e) => {
  //   console.log("FK Response", e);
  // });
};

export const apiAdd = async () => {
  return await httpServices.post(Profile, {
    username: "Duongpt35",
    phone: "0966048002",
    password: "password",
    full_name: "Phạm Tùng Dương",
    dob: "09/09/1999",
    address: "Ha noi",
    groups_user: [{ id: "0", name: "User", level: 2 }],
  });
};
