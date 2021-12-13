import { ASSIGN, CREATE_EVENT, GET_ASSIGN, GET_EVENTS, GET_UN_ASSIGN, ITEMS, UN_ASSIGN, UPDATE_EVENT } from "src/constrants/action";
import { convertToQuery } from "src/helps/function";
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


export const apiAssign = async (body) => {
    return await httpServices.post(`${ASSIGN}`, body);
};

export const apiUnAssign = async (body) => {
    return await httpServices.post(`${UN_ASSIGN}`, body);
};

export const apiGetAssigned = async (param) => {
    return await httpServices.get(`${GET_ASSIGN}${convertToQuery(param)}`,);
};

export const apiGetUnAssigned = async (param) => {
    return await httpServices.get(`${GET_UN_ASSIGN}${convertToQuery(param)}`,);
};

export const apiUpdateEvent = async (body) => {
    return await httpServices.put(`${UPDATE_EVENT}`, body);
};



