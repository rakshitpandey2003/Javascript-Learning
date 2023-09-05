/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ele=0 , count=0;
    for(const i of nums){
        if(count ==0){ele = i; count++;
        }
        else{
            if(i == ele) count++;
            else count--;
        }
    }
    return ele;
};