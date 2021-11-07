import {
    CInputGroup
} from "@coreui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'
const AppDatePicker = (props) => {
    const { form, field, iconName, type, placeholder, title, horizontal, maxTitle, isPhone, ...remainProps } = props;
    const { name, value } = field;
    const { errors, touched, setFieldValue } = form;
    const [startDate, setStartDate] = useState(new Date());
    const onchange = (value) => {
        if (moment(value).format("DD-MM-YYYY") + "" === "Invalid date") {
            setFieldValue(name, "");
        }
        setFieldValue(name, value);
        setStartDate(value);
    }

    return (
        <>
            <CInputGroup className="mb-3" style={{ display: "flex" }}>
                <DatePicker
                    {...remainProps}
                    closeOnScroll={(e) => e.target === document}
                    selected={startDate}
                    onChange={(date) => onchange(date)}
                    dateFormat="dd-MM-y"
                    className=" form-control Date-Picker"
                    placeholderText="dd/mm/yyyy"
                    value={value}
                />
                {errors[name] && <div className="err-text" >{errors[name]}</div>}
            </CInputGroup>
        </>
    );
}
export default AppDatePicker