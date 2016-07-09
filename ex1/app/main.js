jumbotron_values = [

    [
        "What is a computer program?",
        "Computer programs are sets of instructions that let computers do tasks."
    ],
    [
        "What do computer programmers do?",
        "Computer programmers write apps, websites, and much more!"
    ],
    [ 
        "Why should I care about programming?",
        "Super fun. Super profitable. Way of the future!"
    ],
    [
        "Do computers speak languages?",
        "Yes! Computers respond to different languages, that communicate in similiar ways." + 
        " That language is called code."
    ],
    [
        "How is code spoken?",
        "Code has rules and must be said in a specific way, just like English!"
    ],
    [
        "Where can I learn it?",
        "Anywhere on the internet! Check out Khan Academy!"
    ],
    [   "What's next?",
        "Let's write some code..."
    ]
]

function cycleThroughJumboTron(){

    var currentIndex = 0;
    var answerBool = true;

    function setInnerHtml(){

        document.getElementById("question").innerHTML = jumbotron_values[currentIndex][0];
        document.getElementById("answer").innerHTML = jumbotron_values[currentIndex][1];
    }

    function moveLeft(){

        if (currentIndex == 0) {return;}

        currentIndex--;
        setInnerHtml();
        hideAnswer();
    }

    function moveRight(){

        if (currentIndex == 6) {return;}
        currentIndex++;
        setInnerHtml();
        hideAnswer();
    }

    function hideAnswer(){
        document.getElementById("answer").setAttribute("class", "hide");
        answerBool = true;
    }

    function showAnswer(){
        document.getElementById("answer").setAttribute("class", "");
        answerBool = false;
    }


    function toggleAnswer(){

        if (answerBool){
            showAnswer();
        } else {
            hideAnswer();
        }

    }


    document.getElementById("left").onclick = moveLeft;
    document.getElementById("right").onclick = moveRight;
    document.getElementById("question").onclick = toggleAnswer;
    setInnerHtml();
    hideAnswer();
}

cycleThroughJumboTron();