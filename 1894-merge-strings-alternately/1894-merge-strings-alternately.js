/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i=0,j=0;
    let s="";
    while(i<word1.length && j<word2.length){
        s += word1[i++];
        s+= word2[j++];
    }
    while(i<word1.length) s+= word1[i++];
    while(j<word2.length) s+= word2[j++];
    return s;
};