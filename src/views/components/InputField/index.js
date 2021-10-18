import CIcon from "@coreui/icons-react";
import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText
} from "@coreui/react";
import React from "react";
export default (props) => {
  const { form, field, iconName, type, placeholder, title, ...remainProps } = props;
  const { name, value } = field;
  const { errors, touched, setFieldValue } = form;
  const onChange = (values) => {
    setFieldValue(name, values.target.value);
  };
  return (
    <>
      {title && (
        <label style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{title}</label>
      )}
      <CInputGroup className="mb-3">
        {
          iconName && (
            <CInputGroupPrepend>
              <CInputGroupText>
                <CIcon name={iconName} />
              </CInputGroupText>
            </CInputGroupPrepend>
          )
        }
        <CInput
          {...remainProps}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </CInputGroup>
    </>
  );
};
