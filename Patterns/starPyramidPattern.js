/* 
Pattern Problem: Star Pyramid Pattern.
Problem Statement: Given an integer N, print the following pattern.

    *    
   ***    
  *****    
 *******    
*********

Example: Solution Pattern if n is 5, 
change the value of n for increasing or decreasing numbers.
*/

let n=5
let strpattern=""

for(let i=1;i<=n;i++){
    let pattern = ``
    for(let j=1;j<=n-i;j++){
        pattern += " ";
    }
    for(let j=1;j<=2*i-1;j++){
        pattern += "*";
    }
    for(let j=1;j<=n-1;j++){
        pattern += " ";
    }
    
    strpattern += pattern + `\n`;
}
console.log(strpattern)
