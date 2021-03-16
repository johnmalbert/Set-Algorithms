/* 
    https://www.hackerrank.com/challenges/diagonal-difference/problem
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
        - top left to bottom right diagonal
        - top right to bottom left diagonal
    
    EXAMPLE
    let nums = [
        [ 1, 2, 3 ],
        [ 5, 3, 2 ],
        [ 9, 7, 1 ]
    ]
    diagonalDifference(nums) should return 10, because (1 + 3 + 1) - (3 + 3 + 9)
    is 5 - 15, which is -10, whose absolute value is 10
*/
function diagonalDifference(matrix){
    var sum1 = 0; 
    var sum2 = 0;
    var length = matrix[0].length;
    for(let i = 0; i < matrix[0].length; i++){
      sum1 += matrix[i][i];
      sum2 += matrix[length-1-i][i];
    }
    console.log(sum1);
    console.log(sum2);
    return Math.abs(sum1 - sum2);
}
let nums = [
    [ 1, 2, 3, 4 ],
    [ 5, -3, 2, 1 ],
    [ 9, 7, 2, 7 ],
    [ 9, 7, 1, -6 ]
];
console.log(diagonalDifference(nums));
console.log("########################");
console.log();
/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

    EXAMPLE
    let nums1 = [1, 3, 3, 4, 5, 5, 5 ];
    let nums2 = [2, 3, 5, 6, 6, 7, 9 ];

    orderedMultisetUnion(sortedA, sortedB) should return:
    [1, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7, 9]
*/
function orderedMultisetUnion(sortedA, sortedB){
  var dict = {};
  for (let i = 0; i < sortedA.length; i++){
    if (!dict[sortedA[i]]){
      dict[sortedA[i]] = 1;
    }else{
      dict[sortedA[i]] += 1
    }
  }
  let tempCount = 0;
  for (let i = 0; i < sortedB.length; i++){
    if (dict[sortedB[i]]){
      tempCount++;
    }
    else if (!dict[sortedB[i]]) {
      dict[sortedB[i]] = 1
    }
    if(tempCount > dict[sortedB[i]]){
      if(dict[sortedB[i + 1]] !== dict[sortedB[i]]){
        tempCount = 0;
      } else {
        dict[sortedB[i]] = tempCount;
      }

    }
  }
  console.log(dict);
}
let nums1 = [1, 3, 3, 4, 5, 5, 5 ];
let nums2 = [2, 3, 5, 6, 6, 7, 9 ];
orderedMultisetUnion(nums1,nums2);

function orderedMultisetUnion2(sortedA, sortedB) {
  let x = 0;
  let y = 0;
  let result = [];
  while (x < sortedA.length || y < sortedB.length) {
    if (sortedA[x] && sortedA[x] < sortedB[y]) {
      result.push(sortedA[x]);
      x++;
    } else if (sortedB[y] && sortedA[x] > sortedB[y]) {
      result.push(sortedB[y]);
      y++;
    } else if (sortedA[x] == sortedB[y]) {
      result.push(sortedA[x]);
      x++;
      y++;
    } else if (sortedA[x]) {
      result.push(sortedA[y]);
      x++;
    } else {
      result.push(sortedB[y]);
      y++;
    }
  }
  return result;
}
nums1 = [1, 3, 3, 4, 5, 5, 5];
nums2 = [2, 3, 5, 6, 6, 7, 9];
console.log(orderedMultisetUnion2(nums1, nums2));
