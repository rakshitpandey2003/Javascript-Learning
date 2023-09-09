/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count =0;
    for(const i of hours) if(i >= target) count++;
    return count;
};