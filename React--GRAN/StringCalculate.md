## ### String Calculate

\*\*

Have the function StringCalculate(str) take the str parameter being passed and evaluate the mathematical expression within in. The double asterisks (\*\*) represent exponentiation.

For example, if str were "(2+(3-1)*3)**3" the output should be 512. Another example: if str is "(2-0)(6/2)" the output should be 6. There can be parenthesis within the string so you must evaluate it properly according to the rules of arithmetic. The string will contain the operators: +, -, /, *, (, ), and **. If you have a string like this: #/#*# or #+#(#)/#, then evaluate from left to right. So divide then multiply, and for the second one multiply, divide, then add. The evaluations will be such that there will not be any decimal operations, so you do not need to account for rounding.

```
function MathChallenge(str) {

// code goes here
return str;
}

// keep this function call here
console.log(MathChallenge(readline()));
```
