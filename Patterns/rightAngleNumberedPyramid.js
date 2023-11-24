/* 
Pattern Problem: Right Angle Numbered Pyramid Pattern.
Problem Statement: Given an integer N, print the following pattern.

1
12
123
1234
12345

Example: Solution Pattern if n is 5, 
change the value of n for increasing or decreasing number of stars.
*/

let n = 5;
let pattern='';

for(let i=1; i<=n;i++){
    for(let j=1; j<=i;j++){
        pattern += j
    }
    pattern += '\n';
}

console.log(pattern);