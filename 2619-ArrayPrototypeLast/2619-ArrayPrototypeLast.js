// Last updated: 02/06/2026, 19:41:35
1/**
2 * @return {null|boolean|number|string|Array|Object}
3 */
4Array.prototype.last = function() {
5    if(this.length === 0){
6        return -1;
7    }
8    return this[this.length - 1];
9    
10};
11
12/**
13 * const arr = [1, 2, 3];
14 * arr.last(); // 3
15 */