/* 
Pattern Problem: Inverted Numbered Right Pyramid Pattern.
Problem Statement: Given an integer N, print the following pattern.

12345
1234
123
12
1

Example: Solution Pattern if n is 5, 
change the value of n for increasing or decreasing numbers.
*/

let n = 5;
let pattern = "";

for(i=1;i<=n;i++){
    //pattern += i
    for(j=n;j>=i;j--){
         pattern += n-j+1 
     }
    pattern +="\n"
    //console.log(pattern)
}
console.log(pattern)