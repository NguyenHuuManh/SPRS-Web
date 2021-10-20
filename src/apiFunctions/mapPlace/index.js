import { API_KEY_GOONG, URL_GOONG } from "src/constrants/action";
import httpServices from "src/services/httpServices";

export const apiPlaceDetailByLongLat = async (long, lat) => {
    return await httpServices.get(
        `${URL_GOONG}?latlng=${lat},${long}&api_key=${API_KEY_GOONG}`,
    );
};


