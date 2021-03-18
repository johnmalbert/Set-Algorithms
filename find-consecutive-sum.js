function findConsqSums(nums, sum) {
  //working solution.
  var newArray2 = [];
  for (let i = 0; i < nums.length; i++) {
    var currentArray = [];
    var sumTarget = 0;
    for (let j = i; j < nums.length; j++) {
      // this was our problem, j = i;
      sumTarget += nums[j];
      currentArray.push(nums[j]);

      if (sumTarget === sum) {
        newArray2.push(currentArray);
        j = nums.length;
      } else if (sumTarget > sum) {
        j = nums.length;
      }
    }
  }
  return newArray2;
}

let arr2 = [2, 5, 3, 6, 7, 23, 12];
let targetSum = 16;

console.log(findConsqSums(arr2, targetSum));
