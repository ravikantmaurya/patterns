/* 
Pattern Problem: Inverted Right Pyramid Star Pattern.
Problem Statement: Given an integer N, print the following pattern.

*****
****
***
**
*

Example: Solution Pattern if n is 5, 
change the value of n for increasing or decreasing number of stars.
*/

let n = 5;
let pattern = "";

for(i=0;i<n;i++){
    for(j=n;j>i;j--){
        pattern +="*"
    }
    pattern +="\n"
}

console.log(pattern)