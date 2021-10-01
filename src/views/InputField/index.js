import React from "react";
import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
export default (props) => {
  const { form, field, iconName, type, placeholder, ...remainProps } = props;
  const { name, value } = field;
  const { errors, touched, setFieldValue } = form;
  const onChange = (values) => {
    setFieldValue(name, values.target.value);
  };
  return (
    <CInputGroup className="mb-3">
      <CInputGroupPrepend>
        <CInputGroupText>
          <CIcon name={iconName} />
        </CInputGroupText>
      </CInputGroupPrepend>
      <CInput
        {...remainProps}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </CInputGroup>
  );
};
