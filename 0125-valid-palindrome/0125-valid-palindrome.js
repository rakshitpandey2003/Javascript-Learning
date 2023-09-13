/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let b = "";
    for(const i of s) if(i >= 'a' && i<='z' || i >= '0' && i<='9') b+=i;
    s = b.split("");
    s = s.reverse();
    s = s.join("");
    return (b == s)?true : false;
};