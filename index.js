/* eslint-disable no-extra-boolean-cast */

const map = (arr, func) => {
  const result = [];
  arr.forEach((element) => {
    result.push(func(element));
  });
  return result;
};

const reduce = (arr, func, startingValue) => {
  let next = !!startingValue ? startingValue : arr[0];
  const index = !!startingValue ? 0 : 1;

  for (let idx = index; idx < arr.length; idx++) {
    const element = arr[idx];
    next = func(element, next);
  }
  return next;
};
