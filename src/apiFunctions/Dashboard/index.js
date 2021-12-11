import { GET_REPORT_MONTH, GET_REPORT_OVERVIEW, GET_REPORT_PROVINCE, GET_REPORT_YEAR } from "src/constrants/action";
import httpServices from "src/services/httpServices";

export const apiGetReportYear = async (body) => {
    return await httpServices.post(`${GET_REPORT_YEAR}`, body);
};

export const apiGetReportMonth = async (body) => {
    return await httpServices.post(`${GET_REPORT_MONTH}`, body);
};

export const apiGetReportProvince = async (body) => {
    return await httpServices.post(`${GET_REPORT_PROVINCE}`, body);
};


export const apiGetReportOverview = async () => {
    return await httpServices.get(`${GET_REPORT_OVERVIEW}`);
};


