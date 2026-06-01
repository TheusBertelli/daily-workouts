// Last updated: 01/06/2026, 19:38:29
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var romanToInt = function(s) {
6    const valoresRomanos = {
7        "I": 1,
8        "V": 5,
9        "X": 10,
10        "L": 50,
11        "C": 100,
12        "D": 500,
13        "M": 1000
14    }
15    let total = 0;
16    for (let i = 0; i < s.length; i++){
17    const letraAtual = s[i];
18    const  proximaLetra = s[i + 1];
19
20    const valorAtual = valoresRomanos[letraAtual];
21    const proximoValor = valoresRomanos[proximaLetra];
22
23    if(valorAtual < proximoValor){
24    total = total - valorAtual;
25    }else {
26        total = total + valorAtual; 
27    }
28}
29return total;
30   
31    };