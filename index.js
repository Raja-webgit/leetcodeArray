//Q1
let nums = [2,7,11,15];
let target = 9;

let twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};
console.log(twoSum())

//Q26
let removeDuplicates = function(nums) {
    let insertIndex = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i - 1] != nums[i]){  
            nums[insertIndex] = nums[i];  
            insertIndex++; 
        }
    }
    return insertIndex;
};
console.log(removeDuplicates([1,1,2]))

//Q88
function merge(arr1,m,arr2,n){
    let result = [];
    let i=0 , j = 0 ;
    while(i<m && j<n){
      if(arr1[i]<arr2[j]){
        result.push(arr1[i]);
        i++;
      }else{
        result.push(arr2[j]);
        j++;
      }
    }
    while(i<m){
      result.push(arr1[i]);
      i++;
    }
    while(j<n){
      result.push(arr2[j]);
      j++;
    }
    return result;
}

  console.log(merge([4,5,6],3,[1,3,8,10],4));

  //Q49
  let groupAnagrams = function(strs) {
    let hash = {}, anagrams = [];
      
    for (let i = 0; i < strs.length; i++) {
      let word = strs[i].split('').sort(); 
      hash[word] = hash[word] || []; 
      hash[word].push(strs[i]);
    }
    return Object.values(hash); 
  };
  let strs = ["eat","tea","tan","ate","nat","bat"]
  console.log(groupAnagrams(strs))