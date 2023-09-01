Array.prototype.last = function() {
    let i= this.length;
    if(i==0) return -1;
    else return this[i-1];
};
