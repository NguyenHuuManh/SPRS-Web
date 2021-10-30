/*
 * /api/danh-muc-dan-toc
 * danh mục đơn vị
 */
import { isEmpty, isNull } from "lodash-es";
import React, { memo, useEffect, useState } from "react";
import { apiDistrict, apiSubDistrict } from "src/apiFunctions/mapPlace";
import AppSelect from "../AppSelect";


export default memo((props) => {
    const {
        title,
        defaultValue,
        isFormik,
        form,
        field,
        disabled,
        idHuyen,
        functionProps,
        ...remainProps
    } = props;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { errors, touched, setFieldValue } = form;
    const { name, value } = field;

    const callGetHuyen = () => {
        if (!idHuyen || isEmpty(idHuyen + "") || isNull(idHuyen)) {
            setData([]);
            setFieldValue(name, "");
            return
        };
        apiSubDistrict(idHuyen).then((res) => {
            if (res?.status == 200) {
                if (res.data.code == "200") {
                    setData(res?.data?.obj);
                }
                return;
            }
        })
    }

    useEffect(() => {
        callGetHuyen();
    }, [idHuyen]);

    const selectedOption =
        field && data?.find((option) => option?.id == field?.value);
    const selectedDefault = data?.find(
        (option) => option?.values == defaultValue
    );

    const patchedOnChange = (selectedOption) => {
        //
        const selectedValue = selectedOption ? selectedOption.id : selectedOption;

        const changeEvent = {
            target: {
                name: field.name,
                value: selectedValue,
            },
        };
        field.onChange(changeEvent);
        functionProps && functionProps(selectedOption);
    };

    const renderSelectType = () => {
        if (field) {
            return (
                <>
                    <AppSelect
                        {...field}
                        id={field.name}
                        isLoading={loading}
                        title={title}
                        value={selectedOption || ""}
                        onChange={patchedOnChange}
                        options={data}
                        getOptionLabel={(item) => item.name}
                        getOptionValue={(item) => item.id}
                        error={form.errors[field.name]}
                        touched={form.touched[field.name]}
                        {...remainProps}
                        disabled={disabled}
                    />
                </>
            );
        }

        return (
            <AppSelect
                isLoading={loading}
                options={data}
                title={props.title}
                value={selectedDefault}
                getOptionLabel={(item) => item.name}
                getOptionValue={(item) => item.id}
                {...remainProps}
            />
        );
    };
    return renderSelectType();
});
