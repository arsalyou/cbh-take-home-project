# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. Created new `generateHash` function as it was being used twice in the code
2. Created a new constant file and replaced variables with Appconstants so that in case if we have to update the value of variable, we have to make a change once
3. Created new ES6 arrow function and passed the first half of updating candidate to it
4. Used ternary operator to replace if else as it is more readable and used in ES6
5. Replaced old require ES5 statements with new ES6 import 
6. Added safety null checks
