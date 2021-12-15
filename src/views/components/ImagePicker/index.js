import CIcon from "@coreui/icons-react";
import {
  CButton,
  CCard
} from "@coreui/react";
import React, { memo, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { appToast } from "../AppToastContainer";

export default memo((props) => {
  const [image, setImage] = useState();
  const onChange = (event) => {
    readImage(event)
  };

  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      let dataImage = reader.result?.toString().split(",")[1];
      setImage(dataImage);
    };
    reader.onerror = function (error) { };
  }

  const readImage = (event) => {
    var file = event.currentTarget.files[0]
    if (Math.round(file.size / 1048576) > 3) {
      appToast({
        description: "file không được vượt quá " + 3 + "MB",
        toastOptions: { type: "error" },
      });
      return;
    }
    getBase64(file);
  };
  // console.log('value', image);
  const inputFile = useRef(null);
  const chooseFile = () => {
    inputFile.current.value = "";
    inputFile.current.click();
  };
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <CCard style={{ width: "50%" }}>
        <img
          src={`data:image/png;base64,${image}`}
          alt=""
        />
        <CButton onClick={chooseFile} style={{ position: "absolute", bottom: 1, right: 1 }} color="secondary">
          <FaCamera size={20} />
        </CButton>
      </CCard>

      <input type="file"
        accept="image/png, image/jpeg"
        onChange={onChange}
        ref={inputFile}
        value={null}
        style={{ display: "none" }}
      />
    </div>
  );
});
