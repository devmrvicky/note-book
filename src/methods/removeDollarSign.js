// The work of this function is remove dollar ($) sign from user main data
export default function removeDollarSign(data) {
  const prepareData = {};
  for (let key in data) {
    if (key[0] === "$") continue;
    prepareData[key] = data[key];
  }
  return prepareData;
}
