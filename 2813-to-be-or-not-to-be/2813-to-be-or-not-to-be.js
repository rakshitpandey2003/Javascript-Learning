/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function toBe(vul){
        if(val === vul) return true;
        else throw  Error("Not Equal");
    }
    function notToBe(vul){
        if(val !== vul) return true;
        else throw  Error("Equal");
    }
    return {toBe , notToBe};
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */