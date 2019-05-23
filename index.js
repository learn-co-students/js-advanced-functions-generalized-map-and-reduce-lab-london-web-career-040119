// Add your functions here

const map = (arr, mult) => {
    const newArr = []

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    newArr.push(mult(current))
  }

  return newArr
}

function reduce(arr, callback, starting){
    let r = (!!starting) ? starting : arr[0]
    let i = (!!starting) ? 0 : 1
  
    for (i; i < arr.length; i++) {
      r = callback(arr[i], r)
    }
  
    return r;
  }