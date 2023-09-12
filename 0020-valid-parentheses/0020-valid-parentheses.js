/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s){
    let arr = [];
    for(const i of s){
        if(i == '(' || i == '[' || i == '{') arr.push(i);
        else{
            if(arr.length < 1) return false;
            if(i == ')' && arr[arr.length - 1] != '(' || i == ']' && arr[arr.length - 1] != '[' || i == '}' && arr[arr.length - 1] != '{') return false;
            else arr.pop();
        }
    }
    if(arr.length != 0) return false;
    return true;
};