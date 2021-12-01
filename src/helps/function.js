const SUCCESS_STATUS = [200, 201, 202, 203, 204];
export const callAPIPaging = (props) => {
  const { response, onSuccess, onError, size: limit } = props;
  if (SUCCESS_STATUS.includes(response?.code || response?.status)) {
    const returnData = {
      data: response?.data,
      meta: { totalPage: 0, totalItems: 0 },
    };
    if (response.headers["x-total-count"]) {
      const allDataCount = response.headers["x-total-count"];
      returnData.meta.totalItems = allDataCount;
      if (
        Number(allDataCount) / Number(limit) >
        Math.round(Number(allDataCount) / Number(limit))
      ) {
        returnData.meta.totalPage =
          Math.round(Number(allDataCount) / Number(limit)) + 1;
      } else {
        returnData.meta.totalPage = Math.round(
          Number(allDataCount) / Number(limit)
        );
      }
    }
    onSuccess(returnData);
    return;
  }
  onError({ data: response?.data, statusText: response?.statusText });
};

export function convertToQuery(param) {
  return (
    "?" +
    Object.keys(param)
      .map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(param[key]);
      })
      .join("&")
  );
}

export function uniqueArr(arr) {
  return Array.from(new Set(arr)) //
}

export const trimmedObject = (obj) => {
  const trimed = JSON.stringify(obj, (key, value) => {
    if (typeof value === "string") {
      return value.trim();
    }
    return value;
  });
  return JSON.parse(trimed);
};
