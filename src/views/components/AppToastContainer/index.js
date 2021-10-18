import React from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import ToastContent from "./Components/ToastContent";
/**
 *
 * @example
 * appToast({ title: "string", description: "string", toastOptions: { type: "success" } });
 */
export const appToast = (props) => {
  const { title, toastOptions, typeData, characterSplit } = props;

  if (typeData == "html") {
    const string = props.description || "";
    const arr = string.split(characterSplit || "<br/>");
    if (props?.toastOptions?.type === "success") {
      toast.success(
        <div>
          {arr.map((e) => (
            <p>{e}</p>
          ))}
        </div>
      );
    }
    if (props?.toastOptions?.type === "error") {
      toast.error(
        <div>
          {arr.map((e) => (
            <p>{e}</p>
          ))}
        </div>
      );
    }
    return;
  }

  let description = props.description;
  if (props?.toastOptions?.type === "success") {
    description = description || "Thao tác thành công";
  }
  if (props?.toastOptions?.type === "error") {
    description = description || "Lỗi! Vui lòng thử lại hoặc \n liên hệ IT để được giải quyết";
  }
  toast(<ToastContent title={title} description={description} />, toastOptions ? toastOptions : {});
};

export default React.memo((props) => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      style={{ marginTop: 55 }}
    />
  );
});
