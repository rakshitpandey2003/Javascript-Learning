/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue){
    let ans = 0;
    for(const i of items){
        if(ruleKey == 'type'){
            if(i[0] == ruleValue) ans++;
        }
        else if(ruleKey == 'color'){
            if(i[1] == ruleValue) ans++;
        }
        else{
            if(i[2] == ruleValue) ans++;
        }
    }
    return ans;
};