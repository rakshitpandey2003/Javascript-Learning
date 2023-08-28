/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    let val = 0;
    let y = x;
    while(x){
        val = val*10 + x%10;
        x = parseInt(x/10);
    }
    if(val == y) return true;
    else return false;
};