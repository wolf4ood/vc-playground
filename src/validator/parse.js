
export const parse = (onError, json) => {
  try {
    return JSON.parse(json);
  } catch (ex) {
    onError(ex);
  }
};
