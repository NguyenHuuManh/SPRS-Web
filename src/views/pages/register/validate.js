import moment from "moment";
import * as Yup from "yup";

export const register = Yup.object().shape({
    username: Yup.string().required("Tên tài khoản không được bỏ trống").nullable()
        .test("test", "Tên tài khoản không chứa kí tự đặc biệt", function () {
            const { parent } = this;
            const { username } = parent;
            const nameStrim = username + ''.trim();
            var format = /[\s!#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]+/;
            return !format.test(nameStrim);
        }),
    phone: Yup.string().required("Số điện thoại không được bỏ trống").nullable().test('checkphone', "Số điện thoại không hợp lệ", function () {
        const { parent } = this;
        const { phone } = parent;
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        return vnf_regex.test(phone);
    }),
    password: Yup.string().required("Mật khẩu không được bỏ trống").nullable()
        .test('checkSpace', "Mật khẩu không chứa khoảng trắng", function () {
            const { parent } = this;
            const { password } = parent;
            const regex = /\s/;
            return !regex.test(password)
        })
        .test("test", "Mật khẩu phải có cả chữ, sô, kí tự đặc biệt và tối thiểu 8 kí tự", function () {
            const { parent } = this;
            const { password } = parent;
            const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/;
            return regex.test(password);
        }),
    full_name: Yup.string().required("Họ và tên không được bỏ trống").nullable()
        .test("test", "Họ và tên không chứa kí tự đặc biệt", function () {
            const { parent } = this;
            const { full_name } = parent;
            var format = /[\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            return !format.test(full_name);
        }),
    dob: Yup.string().required("Ngày sinh không được bỏ trống").nullable()
        .test("test", "Thời gian đóng cửa phải sau thời gian hiện tại", function () {
            const { parent } = this;
            const { dob } = parent;
            console.log('dob', dob)
            const currentDate = moment().format('DD-MM-YYYY');
            return moment(dob, 'DD-MM-YYYY').isSameOrBefore(moment(currentDate, 'DD-MM-YYYY'))
        }),
    nameOrg: Yup.string().required("Tên tổ chức k được bỏ trống").nullable(),
    city: Yup.string().required("Tỉnh/Thành phố không được bỏ trống").nullable(),
    district: Yup.string().required("Quận/Huyện không được bỏ trống").nullable(),
    subDistrict: Yup.string().required("Xã phường không được bỏ trống").nullable(),
    // addressLine: Yup.string().required("địa chi không được bỏ trống").nullable(),
    adressString: Yup.string().required("Địa chỉ tổ chức không được bỏ trống").nullable(),
    rePassWord: Yup.mixed().required("Xác minh mật khẩu").test("test", "Mật khẩu không khớp", function () {
        const { parent } = this;
        const { rePassWord, password } = parent;
        return rePassWord == password
    }),
    groupsId: Yup.string().required("chọn loại tài khoản").nullable(),

});
