/**
 * From an interview on 2/8/21. encodeStr algo was min also given:
 *  https://github.com/TheCodingDojo/algorithms/blob/main/strings/encodeStr.js
 *
 * The interviewee mentioned it was mostly a comprehension style question.
 *
 * It ain't much, but it's honest work. A worker who measures water level
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 *
 * Write a function that takes an array of numbers, representing water levels at
 * different times throughout the day, and return the largest rise in water level
 * measured that day, but ONLY rises
 *
 * EXAMPLE:
 * let nums = [15, 17, 30, 14, 5, 16, 25, 9, 3]
 *
 * largestFluctuation(nums) should return 20, because the highest rise in the water level
 * is from 5 to 25 feet
 */
function largestFluctuation(levels) {
  var cFlux = 0;
  var max = 0;
  for (var i = 0; i < levels.length; ++i) {
    if (levels[i - 1] < levels[i]) {
      cFlux += levels[i] - levels[i - 1];
      if (cFlux > max) {
        max = cFlux;
      }
    } else {
      cFlux = 0;
    }
    // console.log("Flux is " + cFlux);
    // console.log("Max is " + max);
  }
  return max;
}
let nums = [15, 17, 30, 14, 5, 16, 25, 9, 3];
console.log(largestFluctuation(nums));

function largestFluxCody(levels) {
  let largest = 0;
  let lowest = levels[0];
  for (let i = 0; i < levels.length; i++) {
    if (levels[i] - lowest > largest) {
      largest = levels[i] - lowest;
    } else if (levels[i] < lowest) {
      lowest = levels[i];
    }
  }
  return largest;
}
console.log(largestFluxCody(nums));
/*
        Given two arrays of ints
        return the symmetric differences, (aka disjunctive union)
            - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
            think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
            - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
        Venn Diagram Visualization:
            - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
        EXAMPLE:
        let arrA = [4,1,2,3,4];
        let arrB = [1,2,3,5,5,2];
    
        symmetricDifference(arrA, arrB) should return [4, 5] because 4 and 5 are the values that are only in 1 
        array each, and only appear in the result once, even though they have duplicates in their original arrays
    */
function symmetricDifference(nums1, nums2) {
  //inefficient solution...
  var returnArray = [];
  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i])) {
      if (!returnArray.includes(nums1[i])) {
        returnArray.push(nums1[i]);
      }
    }
  }
  for (let i = 0; i < nums1.length; i++) {
    if (!nums1.includes(nums2[i])) {
      if (!returnArray.includes(nums2[i])) {
        returnArray.push(nums2[i]);
      }
    }
  }
  return returnArray;
}
console.log("############################################");
console.log();
let arrA = [4, 1, 2, 3, 4];
let arrB = [1, 2, 3, 5, 5, 2];
console.log(symmetricDifference(arrA, arrB));

function symdif(nums1, nums2) {
  let obj = {};
  let obj2 = {};

  for (let num of nums1) {
    obj[num] = num;
  }

  for (let num of nums2) {
    obj2[num] = num;
  }

  let out = [];

  for (let key in obj) {
    if (!(key in obj2)) {
      out.push(parseInt(key));
    }
  }

  for (let key in obj2) {
    if (!(key in obj)) {
      out.push(parseInt(key));
    }
  }

  return out;
}

arrA = [4, 1, 2, 3, 4];
arrB = [1, 2, 3, 5, 5, 2];
console.log(symdif(arrA, arrB));
