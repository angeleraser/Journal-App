export const parseText = (str, limit) => {
  const strArr = str.split("");
  if (strArr.length >= limit) {
    return strArr.slice(0, limit).join("") + "...";
  } else {
    return strArr.join("");
  }
};
