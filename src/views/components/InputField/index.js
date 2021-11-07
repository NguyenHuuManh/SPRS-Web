import CIcon from "@coreui/icons-react";
import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText
} from "@coreui/react";
import React, { memo, useMemo } from "react";
export default memo((props) => {
  const { form, field, iconName, type, placeholder, title, horizontal, maxTitle, isPhone, ...remainProps } = props;
  const { name, value } = field;
  const { errors, touched, setFieldValue } = form;
  const onChange = (values) => {
    setFieldValue(name, values.target.value);
  };

  return (
    <>
      {(!horizontal) && title && (
        <label className="inputTitle">{title}</label>
      )}
      <div style={{ display: "flex" }}>
        {
          horizontal && (
            <label className="inputTitle" style={{ width: maxTitle || 150 }}>{title}</label>
          )
        }
        <CInputGroup className="mb-3" style={{ display: "flex" }}>
          {
            iconName && (
              <div style={{ marginRight: -1, width: "20%" }}>

                <CInputGroupPrepend style={{ width: "100%" }}>
                  <CInputGroupText style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, width: "100%", display: "flex", justifyContent: "center" }} >
                    <CIcon name={iconName} height={21} />
                  </CInputGroupText>
                </CInputGroupPrepend>
              </div>
            )
          }
          {isPhone && (
            <div style={{ marginRight: -1, width: "20%" }}>
              <CInputGroupPrepend style={{ width: "100%" }}>
                <CInputGroupText style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, backgroundColor: "#FFFF", width: "100%" }} >
                  <label style={{ height: 13 }}>+84</label>
                </CInputGroupText>
              </CInputGroupPrepend>
            </div>
          )}
          <div style={{ width: `${(iconName && isPhone) ? "60%" : (iconName || isPhone ? "80%" : "100%")}` }}>
            <CInput
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              {...remainProps}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
            />
            {errors[name] && <div className="err-text" >{errors[name]}</div>}
          </div>
        </CInputGroup>
      </div>


    </>
  );
});
