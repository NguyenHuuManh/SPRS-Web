import { GET_REPORT, GET_REPORT_OVERVIEW } from "src/constrants/action";
import httpServices from "src/services/httpServices";

export const apiGetReport = async (body) => {
    return await httpServices.post(`${GET_REPORT}`, body);
};

export const apiGetReportOverview = async () => {
    return await httpServices.get(`${GET_REPORT_OVERVIEW}`);
};


