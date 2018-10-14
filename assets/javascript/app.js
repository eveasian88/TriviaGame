// create ten questions to start game
$(document).ready(function () {
    var options = [
        {
            question: "Roller derby rules and safety standards are governed by which association?", 
            choice: ["AATSP", "WFTDA", "CLTA", "RRG"],
            answer: 1,
            photo: "assets/images/wftda.jpg"
         },
         {
             question: "Skaters who play roller derby can wear what type of skates on the track?", 
            choice: ["inline skates", "jam skates", "quad skates", "rhythm skates"],
            answer: 2,
            photo: "assets/images/quadSkates.gif"
         }, 
         {
             question: "On bout day, what is the maximum number of rostered skaters on a team?", 
            choice: ["10", "20", "30", "40"],
            answer: 1,
            photo: ""
        }, 
        {
            question: "Which is not an ingredient in a Harvey Wallbanger cocktail?", 
            choice: ["Orange Juice", "Vodka", "Sour Mix", "Galliano" ],
            answer: 2,
            photo: ""
        }, 
        {
            question: "What is the term pack defined by in roller derby?", 
            choice: ["12", "6", "24", "13" ],
            answer: 3,
            photo: ""
        }, 
        {
            question: "What is the most widely eaten fish in the world?", 
            choice: ["Tilapia", "Herring", "Sardine", "Tuna" ],
            answer: 1,
            photo: ""
        }, 
        {
            question: "Which fruit does not ripen once it has been picked?", 
            choice: ["Banana", "Lemon", "Mango", "Apple" ],
            answer: 1,
            photo: ""
        }, 
        {
            question: "Which fruit contains the most protein per 100 calories?", 
            choice: ["Guava", "Avocado", "Banana", "Blackberries" ],
            answer: 0,
            photo: ""
        }];
