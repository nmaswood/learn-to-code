# Week 4

### Review

* What's the difference between `"Batman" == "Bat" + "man"` and ` "Batman" = "Bat" + "man"`? Which one is correct?
* What are the two different kinds of booleans?
* If `var hungry = true;` what does this print?

    ```if (hungry) {console.log ("Feed me!");} else {console.log ("I'll eat later."});``` 
*  What does this print `var location = "school"`

    ```if (location == "home"){console.log ("go eat dinner")} else if (location == "party")  {console.log ("Milly Rock")} else { console.log ("go to sleep")};```

### More Boolean Fun!

* The not operator : `!` takes whatever boolean value and flips it.
* `!true == false`, `!false == true`
* To flip the value of a variale try this.

    ```var theSkyIsBlue = false; theSkyIsBlue = !theSkyIsBlue ```
* Correct these statements. 

    ``` var waterIsWet = false; var upIsDown = true; var fireIsReallyCold = false```

* Let's build a function that can flip the value of booleans for us

    ``` function flipIt(booleanInput) { return !booleanInput }```
