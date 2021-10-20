import React from "react";

const styleTitle = {
  fontFamily: "Myriad Bold !important",
};
const styleContent = {
  fontFamily: "Myriad !important",
};


export default React.memo((props) => {
  const { title, description } = props;
  return (
    <div>
      {title && <p style={styleTitle}>{title}</p>}
      {description && <p style={styleContent}>{description}</p>}
    </div>
  );
});
