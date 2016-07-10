"use strict";
const g = {

    jumbo : [

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
    ],
    index  : 0,
    answer : true
}

const cycle = {

    setInnerHtml : () => {

        document.getElementById("question").innerHTML = g.jumbo[g.index][0];
        document.getElementById("answer").innerHTML = g.jumbo[g.index][1];
    },

    move: (mutateIndex, forbiddenIndex) => {

        if (g.index  == forbiddenIndex) {return;}

        g.index += mutateIndex;
        cycle.setInnerHtml();
        document.getElementById("answer").setAttribute("class", "hide");
    },

    moveLeft: ()=> cycle.move(-1, 0),

    moveRight: ()=>  cycle.move(1, 6),

    toggleAnswer: () => {

        const attr = g.answer? "hide" : "";
        document.getElementById("answer").setAttribute("class", attr);
        g.answer = !g.answer
    },

    init : () => {

        document.getElementById("left").onclick = cycle.moveLeft;
        document.getElementById("right").onclick = cycle.moveRight;
        document.getElementById("question").onclick = cycle.toggleAnswer;
        cycle.setInnerHtml();
    }
}

cycle.init();
