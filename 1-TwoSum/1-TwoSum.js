// Last updated: 01/06/2026, 18:52:00
1
2/**
3 * @param {number[]} nums
4 * @param {number} target
5 * @return {number[]}
6 */
7    var twoSum = function(nums, target) {
8    const historico = new Map();
9
10    for (let i = 0; i < nums.length; i++){
11    const numeroAtual = nums[i];
12    const complemento = target - numeroAtual;
13 
14    if (historico.has(complemento)){
15        return[historico.get(complemento), i];
16    }
17
18    historico.set(numeroAtual, i);
19    }
20};