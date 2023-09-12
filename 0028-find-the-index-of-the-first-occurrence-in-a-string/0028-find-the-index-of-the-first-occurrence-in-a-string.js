/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n= haystack.length;
    for(let i=0;i<n;i++){
        let j=i;
        if(i+needle.length > n) return -1;
        for(const k of needle){
            if(k == haystack[j] && j-i == needle.length -1) return i;
            if(k != haystack[j++])break;
        }
    }
    return -1;
};