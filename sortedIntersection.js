// set: set of values where each value is unique (only one appeareance.)
// multiset: set of values, each value can exist more than once.
// ordered sets
// ordered multisets

//VENN Diagrams in code

/* 
Efficiently combine two already sorted multiset arrays 
into an array containing the sorted set intersection of the two.
Output: only the shared values between the two arrays (deduped).
Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

EXAMPLE:
let nums1 = [1,4,5,7,7,8,9,9,10,12];
let nums2 = [2,3,3,6,7,9,9,9,11,13];

orderedIntersection(nums1, nums2) should return [7,9] because 7 and 9 are the only values
in both sets, and only appear once because we want the output to be the shared deduped values
*/
function orderedIntersection(sortedA, sortedB) {
console.log("Sort using two for loops!");
var newArr = [];
for (var i = 0; i < sortedA.length; i++) {
for (var j = 0; j < sortedB.length; j++) {
    if (sortedA[i] === sortedB[j]) {
    //if number appears in both arrays, push into a new array.
    if (newArr[newArr.length - 1] !== sortedA[i]) {
        newArr.push(sortedA[i]);
    }
    }
}
}
return newArr;
}

let nums1 = [1, 4, 5, 7, 7, 8, 9, 9, 10, 12];
let nums2 = [2, 3, 3, 6, 7, 9, 9, 9, 11, 13];

console.log(orderedIntersection(nums1, nums2));

function orderedIntersection2(sortedA, sortedB) {
console.log("Sort using dictionary approach!");
var newArr = [];
var newDict = {};
for (let i = 0; i < sortedA.length; i++) {
newDict[sortedA[i]] = true;
}
console.log(newDict);
for (let i = 0; i < sortedB.length; i++) {
if (newDict[sortedB[i]] === true) {
    if (newArr[newArr.length - 1] !== sortedB[i]) {
    newArr.push(sortedB[i]);
    }
}
}
return newArr;
}
console.log("");
console.log("#######################################");
console.log(orderedIntersection2(nums1, nums2));

function orderedIntersection3(sortedA, sortedB) {
console.log("Sort using .includes approach!");

var newArr = [];
for (let i = 0; i < sortedB.length; i++) {
if (sortedA.includes(sortedB[i])) {
    if (newArr[newArr.length - 1] !== sortedB[i]) {
    newArr.push(sortedB[i]);
    }
}
}
return newArr;
}
console.log("");
console.log("#######################################");
console.log(orderedIntersection3(nums1, nums2));
