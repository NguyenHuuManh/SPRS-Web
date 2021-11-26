import { GET_REPORT } from "src/constrants/action";
import { convertToQuery } from "src/helps/function";
import httpServices from "src/services/httpServices";

export const apiGetReport = async (body) => {
    return await httpServices.post(`${GET_REPORT}`, body);
};

