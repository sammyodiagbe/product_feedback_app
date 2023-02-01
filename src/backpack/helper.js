export const generateRandomId = (length) => {
  let generatedId = "";
  if (length > 10) length = 10;
  const alphaNumeric =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const time = Date.now();
  let count = 0;
  while (count < length) {
    generatedId += alphaNumeric.charAt(
      Math.floor(Math.random() * alphaNumeric.length)
    );
    count += 1;
  }
  return `${generatedId}_${time}`;
};
