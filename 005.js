// EASY

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

 

// Example :

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 


var shuffle = function(nums, n) {
    let num2=nums.splice(0,n);
    let newarr=[]
    for(let i=0;i<=n-1;i++){
        newarr.push(num2[i],nums[i])
    }
    return newarr;
};