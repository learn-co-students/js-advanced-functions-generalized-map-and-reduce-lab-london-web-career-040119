// Add your functions here
const map = (arr, func) => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i]
        newArr.push(func(currentElement))
    }

    return newArr
}

function reduce(arr, callback, starting){
    let r = (!!starting) ? starting : arr[0]
    let i = (!!starting) ? 0 : 1

    for (; i < arr.length; i++) {
      r = callback(arr[i], r)
    }

    return r;
  } 
