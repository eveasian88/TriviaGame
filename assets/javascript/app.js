// ten trivia questions
$(document).ready(function () {
    var options = [
        {
            question: "Roller derby rules and safety standards are governed by which association?",
            choice: ["AATSP", "WFTDA", "CLTA", "BAD GIRLS"],
            answer: 1,
            photo: "assets/images/wftda.gif"
        },
        {
            question: "Skaters who play roller derby can wear what type of skates on the track?",
            choice: ["inline skates", "rhythm skates", "quad skates", "ice skates"],
            answer: 2,
            photo: "assets/images/quadSkates.gif"
        },
        {
            question: "On bout day, what is the total number of skaters allowed on the track at any given time?",
            choice: ["5", "10", "20", "30"],
            answer: 1,
            photo: "assets/images/10skaterTrack.gif"
        },
        {
            question: "There are three positions in roller derby. Who wears the striped helmet cover?",
            choice: ["jammer", "pivot", "blocker", "referee"],
            answer: 1,
            photo: "assets/images/pivot.gif"
        },
        {
            question: "The blockers play both defense and offense at the same time. Together they are called _____? ",
            choice: ["the wall", "the attackers", "the pack", "the blockers"],
            answer: 2,
            photo: "assets/images/pack.gif"
        },
        {
            question: "Only the girl with the helmet STAR cover can score points for the team. What is her position?",
            choice: ["jammer", "pivot", "blocker", "referee"],
            answer: 0,
            photo: "assets/images/jammer.gif"
        },
        {
            question: "After the lead jammer makes an initial pass, she can score points after passing each skater's _____.",
            choice: ["head", "shoulder", "hips", "feet"],
            answer: 2,
            photo: "assets/images/leadJammer.gif"
        },
        {
            question: "Which part of the body is illegal to use when blocking another skater?",
            choice: ["back", "shoulder", "elbow", "hips"],
            answer: 2,
            photo: "assets/images/illegalBlock.gif"
        },
        {
            question: "A blocker must be within _____ feet of the pack to execute a legal block?",
            choice: ["10", "15", "20", "no limit"],
            answer: 2,
            photo: "assets/images/20feet.gif"
        },
        {
            question: "In roller derby, a new skater is called _____?",
            choice: ["unicorn", "wifey", "fresh meat", "bleacher creature"],
            answer: 2,
            photo: "assets/images/freshMeat.gif"
        }];

    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 15;
    var intervalId;
    var userGuess = "";
    var running = false;
    var qCount = options.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];

    // define sound
    var derbyWhistle = new Audio("assets/audio/derbyWhistle.m4a");

    $("#reset").hide();
    // click start button to start game
    $("#start").on("click", function () {
        $("#start").hide();
        displayQuestion();
        runTimer();
        for (var i = 0; i < options.length; i++) {
            holder.push(options[i]);
        }
    })

    // timer start
    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }

    // timer countdown
    function decrement() {
        timer--;
        $("#timeleft").html("<h3>time remaining: " + timer + "</h3>");

        // stop timer if reach 0
        if (timer === 0) {
            unanswerCount++;
            stop();
            $("#answerblock").html("<p>Time is up! The correct answer is:  " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }
    }

    // timer stop
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
        // use for debugging
        // console.log(timer);

    // randomly pick question in array if not already shown
    // display question and loop though and display possible answers
    function displayQuestion() {
        // generate random index in array
        index = Math.floor(Math.random() * options.length);
        pick = options[index];

        //	if (pick.shown) {
        //	    //recursive to continue to generate new index until one is chosen that has not shown in this game yet
        //		displayQuestion();
        //	} else {
        //		console.log(pick.question); // problem here need to fix

        // iterate through answer array and display
        $("#questionblock").html("<h2>" + pick.question + "</h2>");
        for (var i = 0; i < pick.choice.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.choice[i]);
            // assign array position to it so can check answer
            userChoice.attr("data-guessvalue", i);
            $("#answerblock").append(userChoice);
            //		}
        }

        // click function to select answers and outcomes
        $(".answerchoice").on("click", function () {
            //grab array position from userGuess
            userGuess = parseInt($(this).attr("data-guessvalue"));

            // correct guess or wrong guess outcomes
            if (userGuess === pick.answer) {
                stop();
                correctCount++;
                userGuess = "";
                $("#answerblock").html("<p>Correct!</p>");
                hidepicture();

            } else {
                stop();
                wrongCount++;
                userGuess = "";
                $("#answerblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
                hidepicture();
            }
        })
    }


    function hidepicture() {
        $("#answerblock").append("<img src=" + pick.photo + ">");
        newArray.push(pick);
        options.splice(index, 1);

        var hidepic = setTimeout(function () {
            $("#answerblock").empty();
            timer = 15;

            //run the score screen if all questions answered
            if ((wrongCount + correctCount + unanswerCount) === qCount) {
                $("#questionblock").empty();
                $("#questionblock").html("<h3>Game Over!  Here's how you did: </h3>");
                $("#answerblock").append("<h4> Correct:  " + correctCount + "</h4>");
                $("#answerblock").append("<h4> Incorrect:  " + wrongCount + "</h4>");
                $("#answerblock").append("<h4> Unanswered:  " + unanswerCount + "</h4>");
                $("#reset").show();
                correctCount = 0;
                wrongCount = 0;
                unanswerCount = 0;
              
            } else {
                runTimer();
                displayQuestion(); 
            }
        }, 3000);
    }

    $("#reset").on("click", function () {
        $("#reset").hide();
        $("#answerblock").empty();
        $("#questionblock").empty();
        // derbyWhistle.play(); // won't play anywhere i've tried
        for (var i = 0; i < holder.length; i++) {
            options.push(holder[i]);
        }
        runTimer();
        displayQuestion();
    })

})
