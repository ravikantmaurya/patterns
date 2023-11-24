/*
Pattern Problem: Rectangular Star Pattern.
Problem Statement: Given an integer N, print the following pattern.

*****
*****
*****
*****
*****

Solution Pattern if n is 5, 
change the value of n for increasing or decreasing number of stars.
*/

let n = 5;
let pattern='';
for(i=0; i<n; i++){
    pattern +='*'
    for(j=0;j<n-1;j++){
        pattern += '*'
    }
    pattern +='\n'
}
console.log(pattern)
