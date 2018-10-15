// ten trivia questions
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
    var timer = 20;
    var intervalId;
    var userGuess = "";
    var running = false;
    var qCount = options.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];


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
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer--;

        // stop timer if reach 0
        if (timer === 0) {
            unanswerCount++;
            stop();
            $("#answerblock").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }
    }

    // timer stop
    function stop() {
        running = false;
        clearInterval(intervalId);
    }

    // randomly pick question in array if not already shown
    // display question and loop though and display possible answers
    function displayQuestion() {
        // generate random index in array
        index = Math.floor(Math.random() * options.length);
        pick = options[index];

        //	if (pick.shown) {
        //		// recursive to continue to generate new index until one is chosen that has not shown in this game yet
        //		displayQuestion();
        //	} else {
        //		console.log(pick.question);
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

// need to do the following steps to get game running
// click function to select answers and outcomes
// grabs a question
// correct guess or wrong guess outcomes
// figure out how to display photo/gif if they guess correct or not
// run the timer count down until all questions are answered
// need reset button to restart