import { CREATE_EVENT, GET_EVENTS, ITEMS } from "src/constrants/action";
import httpServices from "src/services/httpServices";


export const apiGetItems = async () => {
    return await httpServices.get(`${ITEMS}`);
};

export const apiCreateEvent = async (body) => {
    return await httpServices.post(`${CREATE_EVENT}`, body);
};

export const getEvents = async (body) => {
    return await httpServices.post(`${GET_EVENTS}`, body);
};




