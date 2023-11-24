/* 
Pattern Problem: Right Angle Numbered Pyramid Pattern.
Problem Statement: Given an integer N, print the following pattern.

1
22
333
4444
55555

Example: Solution Pattern if n is 5, 
change the value of n for increasing or decreasing number of stars.
*/

let n=5;
let pattern='';
for(i= 1; i <= n; i++){
    for(j= 1; j <= i; j++){
        pattern += i
    }
    pattern += '\n'
}

console.log(pattern);