# Booleans, Functions and Loops

#### Setup
* Enter your browser's console. Do you remember how?

####
##### Booleans
* Boolean refers to `True` and `False`
* type `2 + 2 == 4`?
* Is that true?
* type `1 < 2`
* type `2 > 1`
* type `1 > 1 `
* type `1.0 == 1`

* type `kanye = 20`
* type `taylor = 10`
* type `kanye == taylor`
* What happens?
* type `kanye < taylor`
* What happens?
* type `kanye = 50`
* type `kanye == 20`
* What happens? What's the difference between `=` and `==`?


* type `true == true`
* What happens?
* type `false == false`
* How does this compare to the last thing you typed?
* type `true == false`
* Why does that makes sense?
* Now type `beyonce = 1, rihanna = 2, nasr = 3`
* type `rihanna < beyonce && nasr < rihanna `
* The `&&` symbol means `and`. It is a "logical operator"
* The `\\` symbol means `or`.
* type `rihanna < nasr || nasr > beyonce`
* What happens here?

#### If statements
* type `var goodAtBasketball = {"lebron" : true, "kobe" : true, "nasr" : false}`
* type `if (goodAtBasketball.kobe) {console.log ("good");} else {console.log ("bad");}`
* type `if (goodAtBasketball.nasr) {console.log ("good");} else {console.log ("bad");}`



#### Functions

* type `function add (firstnumber, secondnumber) {return first number + second number;}``
* type `function hello () {console.log ("What's up!"};`
* type `hello();`
* type `add(1, 2)``
* What did you see?
* type `function helloname (name) {console.log ("What's up!" + name};`
* type `helloname("myname")` (except put in your name)
* What changed?

### Loops

* type `function ZeroToHundred () {for (var i = 1; i <= 100; i = 1 + i) {console.log(i)};
    console.log("Zero to a hundred real quick.");}`
* type `ZeroToHundred()`
* What's happening here?
* Can you identify where booleans are? Where logical operators are?
* Retype the function, but this time count to 200. What did you need to change?
* This is called a for loop. There's an if statement "hidden" in the for loop,
can you find it?
* type `function hotlinebling(repetitions) {for (var i = 1; i <= repetitions; i = 1 + i)
    {console.log("1-800-HOTLINEBLING   " + i)};}`
 * type `hotlinebling(5)`
 * type `hotlinebling("5")`
 * Why didn't that work?
