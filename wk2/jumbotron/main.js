"use strict";
const g = {

    jumbo : [
        [ "Today we are learning about variables, lists, dictionaries and iteration!",
            ""
        ],
        [
            "What is a variable?",
            "A variable creates a reference to a value?"
        ],
        [
            "What can variables be?",
            "Variables can refer to strings, numbers, lists, and dictionaries?"
        ],
        [
            "What is a list and what is a dictionary??",
            "A list is ... well a a list! A dictionary stores key-value mappings."
        ],
        [
            "What is list iterations?",
            "List iteration is just moving through a list."
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

    moveRight: ()=>  cycle.move(1, g.jumbo.length -1),

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
