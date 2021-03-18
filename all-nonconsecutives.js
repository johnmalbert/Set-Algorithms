/* 
    Given an array of ints, find all the non-consecutive integers
    A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
    The first element is never considered non-consecutive.
    Return an array of objects where each object contains the number itself
    and it's index.
    
    EXAMPLE:
    let arr = [1,3,4,5,6,8,9,11];

    allNonConsecutive(arr) should return:
    [
        { i: 1, n: 3 },
        { i: 5, n: 8 },
        { i: 7, n: 11 }
    ]
*/
function allNonConsecutive(sortedNums) {
  var returnArr = [];
  for (let i = 1; i < sortedNums.length; i++) {
    //if the current value - 1 is equal to the previous value
    if (sortedNums[i] - 1 !== sortedNums[i - 1]) {
      // put the index and the value into our return array
      const newObj = {
        i: i,
        n: sortedNums[i],
      };
    //   console.log(newObj);
      // do something with the newObj we created:
      returnArr.push(newObj);
    }
  }
  return returnArr;
}

let arr = [1, 3, 4, 5, 6, 8, 9, 11];
console.log(allNonConsecutive(arr));
console.log("###########################");
console.log("");
