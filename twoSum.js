function twoSum(nums, targetSum){
    let dict = {}
    for (let i = 0; i < nums.length; i++) {
        const num = targetSum - nums[i];
        if(num in dict) {
            return [i, dict[num]]
        }
        dict[nums[i]] = i;
    }
}
console.log(twoSum([2,11,7,15], 22));

function kMostFrequent(nums, k){
    const freqDict = {};
    const freqArray = [];
    var max = 0;
    var heldKey = 0;
    
    for (let i = 0; i < nums.length; i++) {
        var num = nums[i];
        if(freqDict[num]){
            freqDict[num] += 1;
        }else{
            freqDict[num] = 1;
        }
        
    }
    while(k > 0){
        for(let key in freqDict){
            if(freqDict[key] > max){
                max = freqDict[key];
                heldKey = key;
            }
        }
        freqArray.push(heldKey);
        freqDict[heldKey] = 0;
        k--;
        max = 0;
    }
    return freqArray;
}
let arr1 = [1,2,3,4,52,1,2,1,3]
let k1 = 2;
console.log(kMostFrequent(arr1, k1));

function kMost(arr1, k){
    const elementFreq = {};
    const freqTable = {};
    const output = [];
    let maxFreq = 0;

    for (let i = 0; i < arr1.length; i++) {
        if(elementFreq[i] === undefined){
            elementFreq[i] = 1;
        }else{
            elementFreq[i]++;
        }

        if(elementFreq[i] > maxFreq){
            maxFreq = elementFreq[i];
        }
    }

    for(let key in elementFreq){
        let frequency = elementFreq[key];

        if(freqTable[frequency] === undefined){
            freqTable[frequency] = [parseInt(key)];
        } else {
            freqTable[frequency].push(parseInt(key));
        }
    }

    while(output.length < k){
        if(freqTable[maxFreq] !== undefined && freqTable[maxFreq].length > 0){
            output.push(freqTable[maxFreq].pop());
        } else {
            maxFreq--;
        }
    } 
    return output;
}

let arr2 = [1,1,1,2,2,3,3,3,3];
let k2 = 2;
console.log(kMost(arr2, k2));
