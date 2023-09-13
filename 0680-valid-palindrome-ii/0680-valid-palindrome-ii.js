/**
 * @param {string} s
 * @return {boolean}
 */

function ispali(s,l,r){
    while(l<r)if(s[l++] != s[r--])return false;
    return true;
}
var validPalindrome = function(s) {
    if(s.length == 1) return true;
    let i =0 , j = s.length -1;
    while (i<j){
        if(s[i] != s[j]){
            if(ispali(s , i+1,j) || ispali(s,i,j-1))return true; 
            return false;
        }
        i++ ; j--;
        }
    return true;
};