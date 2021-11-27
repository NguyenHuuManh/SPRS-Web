import moment from "moment";
import * as Yup from "yup";

export const report = Yup.object().shape({
    type_time: Yup.string().required("Chọn loại báo cáo").nullable(),
    date_from: Yup.string().required("Nhập từ ngày").nullable().test("test", "Từ ngày không được lớn hơn đến ngày", function () {
        const { parent } = this;
        const { date_from, date_to } = parent;
        if (moment(moment(date_from).valueOf()).isSameOrBefore(moment(date_to).valueOf())) {
            return true;
        }
        return false
    }),
    date_to: Yup.string().required("Nhập đến ngày").nullable().test("test", "Đến ngày  không được lớn hơn ngày hiện tại", function () {
        const { parent } = this;
        const { date_to } = parent;
        if (moment(moment(date_to).valueOf()).isSameOrBefore(moment().valueOf())) {
            return true;
        }
        return false
    }),


});
