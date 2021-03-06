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
