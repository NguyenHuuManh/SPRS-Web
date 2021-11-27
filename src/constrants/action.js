export const API_KEY = "AIzaSyDlqprU1uYvSEEQIEotGG8_mL3QFfVB7vY"
export const URL_GOONG = "https://rsapi.goong.io"
export const API_KEY_GOONG = "kBfz9ty7aBBlGBqhR0iFYXDRLhNrU2t5vGmIhvas"
export const GET_TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
export const URL = "http://ec2-18-140-72-243.ap-southeast-1.compute.amazonaws.com";
//
export const SIGNIN = `${URL}/authenticate-web`;
export const USER = `${URL}/user`;
export const GET_USERS = `${URL}/sprs/api/users`;
export const GET_USERS_BY_NAME = `${URL}/sprs/api/users/search`;
export const PROFILE = `${URL}/sprs/api/user`;
export const UPDATE_PROFILE = `${URL}/sprs/api/user/update/infor`
export const SIGNUP_ORG = `${URL}/sprs/api/users_v2/organizationlAdmin`
export const OTP_PASSWORD = `${URL}/sprs/api/generateOtp`
export const OTP_CHECKING = `${URL}/sprs/api/validateOtp`
export const RESET_PASSWORD = `${URL}/sprs/api/forgotPassword`
export const UPDATE_PASS = `${URL}/sprs/api/user/update/password`
//
export const REQUEST_ORG = `${URL}/sprs/api/request-manage/request-organizationalAdmin`;
export const REGISTER_ORG_USER = `${URL}/sprs/api/users_v2/organizationalUser`;
export const GET_ORG = `${URL}/sprs/api/organization-manage/origanization/get-by-user`;
export const UPDATE_ORG = `${URL}/sprs/api/organization-manage/origanization/update`;
export const REQUEST_ADMIN = `${URL}/sprs/api/request-manage/request-systemAdmin`;
export const ORG_MANAGEMENT = `${URL}/sprs/api/organization-manage/origanization`;
export const GET_REQUEST_REGISTER_ORG_UNCHECK = `${URL}/sprs/api/request-manage/request-systemAdmin/uncheck`;
export const GET_REQUEST_REGISTER_ORG_REJECT = `${URL}/sprs/api/request-manage/request-systemAdmin/reject`;
export const ACCEPT_REQUEST_REGISTER_ORG = `${URL}/sprs/api/request-manage/admin/register/accept`;
export const REJECT_REQUEST_REGISTER_ORG = `${URL}/sprs/api/request-manage/admin/register/reject`;
//
export const PLACE_AUTOCOMPLETE = `${URL_GOONG}/Place/AutoComplete`
export const DETAIL_PLACE_LAT_LNG = `${URL_GOONG}/Geocode`
export const DETAIL_PLACE_ID = `${URL_GOONG}/Place/Detail`

//api danh muc
export const CITY = `${URL}/sprs/api/address/city`
export const DISTRICT = `${URL}/sprs/api/address/district/`
export const SUBDISTRICT = `${URL}/sprs/api/address/subdistrict/`
export const GROUPS = `${URL}/sprs/api/groups-all`
export const GROUP_REGISTER = `${URL}/sprs/api/groups-register-web`
export const GET_PERMISSION_OWN = `${URL}/sprs/api/permissions/getOwn`


//permission

export const GRANT__USER_PERMISSION = `${URL}/sprs/api/users/grantPermission`
export const GRANT_USER_UNPERMISSION = `${URL}/sprs/api/users/unGrantPermission`

export const GRANT_GROUP_PERMISSION = `${URL}/sprs/api/users/grantGroup`
export const GRANT_GROUP_UNPERMISSION = `${URL}/sprs/api/users/unGrantGroup`

export const GET_GROUP_AUTHORIED = `${URL}/sprs/api/groups-authoried`
export const GET_GROUP_UNAUTHORIED = `${URL}/sprs/api/groups-unauthoried`

export const GET_PERMISSION = `${URL}/sprs/api/permissions-authoried`
export const GET_UNPERMISSION = `${URL}/sprs/api/permissions-unauthoried`

//report
export const GET_REPORT = `${URL}/sprs/api/report-manage/getReport`
export const GET_REPORT_OVERVIEW = `${URL}/sprs/api/report-manage/getReportOverview`

//Notification
export const SEND_NOTIFICATION = `${URL}/sprs/api/notification-manage/send-notifications`




