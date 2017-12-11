// GLOBALS
var correct = 0;
var incorrect = 0;
var timer; //the timer object.
var qNumber = 0; //what quesiton number the user is on
var questions = ["In what country was Vincent Van Gogh born?", "How old was Vincent Van Gogh when he made his first painting?","How much time did Van Gogh spend formally studying art in school?", "What fellow painter did Van Gogh attack, resulting in his famous ear injury?", "Van Gogh painted his greatest masterpiece, “The Starry Night”, in which country?", /* 6 */ "The swirling, stormy patterns in many of his paintings is known as what?", /* 7 */ "In his ten years of painting, Van Gogh is said to have made how many paintings?", /* 8 */ "He was known to apply paint so thickly that the texture of brush strokes or palette knife are visible. This technique is called what?", /* 9 */ "How many paintings in total did Van Gogh sell in his lifetime?", /* 10 */ "What is the highest reported price ever paid for a Van Gogh painting (adjusted for inflation)?", /* 11 */ "How did Vincent Van Gogh die?", /* 12 */ "After Vincent Van Gogh’s death, who helped popularize his work?"];
var answer1s = ["France", "8", "none", "Paul Gauguin", "Netherlands", /* 6 */ "atmosphere", /* 7 */"300", /* 8 */ "impasto", /* 9 */ "0", /* 10 */ "$52 million", /* 11 */ "gunshot", /* 12 */ "Vincent's mother"];
var answer2s = ["Netherlands", "10", "a few months", "Henri Matisse", "Denmark", /* 6 */ "ambiance", /* 7 */ "500", /* 8 */ "spackle", /* 9 */ "1", /* 10 */ "$102 million", /* 11 */ "hanging", /* 12 */ "Vincent's father"];
var answer3s = ["Belgium", "12", "One year", "Andre Derain", "France", /* 6 */ "turbulence", /* 7 */ "700", /* 8 */ "fresco", /* 9 */ "58", /* 10 */ "$152 million", /* 11 */ "illness", /* 12 */ "Vincent's brother's wife"];
var answer4s = ["Germany", "27", "Three years", "Maurice de Vlaminck", "Germany",/* 6 */ "distortion", /* 7 */ "900", /* 8 */ "smear", /* 9 */ "167", /* 10 */ "$202 million", /* 11 */ "poisoning", /* 12 */ "Vincent's friend, Paul Gauguin"];
var correctAns = [2, 4, 2, 1, 3, 3, 4, 1, 2, 3, 1, 3];
var interesting_fact = ["Vincent Van Gogh was born in the Netherlands. He shared a name with his stillborn brother who died one year before he was born so he grew up seeing his own name on a gravestone.","Vincent was 27 years old when he started painting. He was supposed to follow in his father's footsteps and become a Pastor.", "Vincent went to art school but only stayed for a few months due to disagreements with his tutors about his skill level.", "Van Gogh attacked his friend Paul Gauguin with a razor, resulting in Vincent cutting off a piece of his own ear – but not the whole ear as is often rumored.","Van Gogh created his most famous work, “The Starry Night”, while staying in an asylum in Saint-Remy-de-Provence, France.", /* 6 */ "The answer is “turbulence”. Mathematical analysis reveals that the stormy patterns in his paintings are uncannily like real turbulence, as seen in swirling water or the air from a jet engine.",/* 7 */"He created around 900 paintings and 1100 sketches/pencil drawings. Van Gogh was incredibly prolific durring his 10 years painting.", /* 8 */ "The technique is called “impasto”. An art conservator once found the body of a grashopper submerged in the thick paint of one of Van Gogh's pieces.", /* 9 */ "Van Gogh sold just one painting, “The Red Vineyard” (pictured above), during his lifetime. He couldn't afford to pay models, so he mostly painted peasants, flowers, landscapes, and himself.", /* 10 */ "The most expensive Van Gogh piece ever sold, “Portrait of Dr. Gachet” (pictured above), sold in 1990 for $152 million (adjusted to inflation).", /* 11 */ "He was found with a bullet in his chest. It's long been reported that he committed suicide by shooting himself, but a recent theory suggests he might have been shot by a local teenager.", /* 12 */ "Van Gogh’s work began to shoot to fame eleven years after his death due to the diligence of his brother Theo’s wife. She collected his letters and paintings and dedicated herself to getting Vincent Van Gogh’s work the recognition it deserved."]
var timeLeft = 30;
var gifs = [ "./assets/images/q1.gif", "./assets/images/q2.gif","./assets/images/q3.gif", "./assets/images/q4.gif", "./assets/images/q5.gif", "./assets/images/q6.gif", "./assets/images/q7.gif", "./assets/images/q8.gif", "./assets/images/q9.2.png", "./assets/images/q10.jpg", "./assets/images/q11.gif", "./assets/images/q12.gif" ]


// RUNTIME
$(document).ready(setup);


// SETUP
function setup(){ //executes once on page load
  	//setup view
	introScreen();
  	//events
	//when start button is clicked, start game
	$('#start_button').click(start_game);
  	//add guess event listeners
    for(var i=1;i<=4;i++)
    {
        var nextButton = "#answer_" + i;
        console.log("Making " + nextButton + " clickable");
        $(nextButton).click(playerGuess);
        //when button clicked, what do we do? (depends on button # & current question)
    }
};
function start_game() { //exectutes once every time game starts or restarts
  	//variable defaults
  	
    correct = 0;
    incorrect = 0;
  	qNumber = 0;
    //stop timer, if running
    //window.clearInterval(timer); //do we need this?
	//start loop
    //$('#question_box').html($('#question_1')); //???
    load_question();
}


// LOOP
function load_question() { 
  	//game is over when there are no more questions
	if (!questions[qNumber]) {
		game_over();
		return;
	}
	//get next qustion, put it on the screen & whatever
	$("#question_box").html(questions[qNumber]);
	$('#answer_1_text').html(answer1s[qNumber]);
	$('#answer_2_text').html(answer2s[qNumber]);
	$('#answer_3_text').html(answer3s[qNumber]);
	$('#answer_4_text').html(answer4s[qNumber]);
	//change view
  	questionScreen();
  	//start timer
  	timeLeft = 30;
  	$('#timer_sec').html(timeLeft);
  	timer = window.setInterval(timerUpdate, 1000);
}
function questionAnswered(){
    $("#gif_box").html("<img src='" + gifs[qNumber] + "'>");
	//change view, then load next question after a pause
  	answerScreen();
	setTimeout(load_question, 1000); //delay before going to the next question
  	//stop timer, if running
    window.clearInterval(timer);
  	//update
  	qNumber++;
}
function timerUpdate() {
	timeLeft = timeLeft - 1;
	$('#timer_sec').html(timeLeft);
	if (timeLeft <= 0)
	{
      	$("#result_box").text("You RAN OUT OF TIME! " + interesting_fact[qNumber]);
      	questionAnswered();
    }
}


// EVENT HANDLING
function playerGuess(event) {
  	//get number of guess (1-4)
    var guessButtonId = $(this).attr('id');
  	var guessNumber = Number(guessButtonId[guessButtonId.length-1]);
    // alert("Clicked " + $(this).attr('id'));  

    console.log(guessNumber);
    console.log(correctAns[qNumber]);
	
  	//setup view
    if(guessNumber === correctAns[qNumber]) {
        $("#result_box").text("That's CORRECT ! " + interesting_fact[qNumber]);
        correct++;
    }
    else{
        $("#result_box").text("That's INCORRECT ! " + interesting_fact[qNumber]);
        incorrect++;
    }
  	questionAnswered();
}


// VIEWS
function introScreen(){
	$("#starry_night").hide();
	$("#self").show();
	$("#timer").hide();
	$("#question_box").hide();
	$("#answer_box").hide();
	$("#gif_box").hide();
	$("#result_box").hide();
}
function questionScreen(){
	$("#starry_night").hide();
    $("#intro").hide();
    $("#self").hide();
    $("#start_button").hide();
    $("#timer").show();
    $("#question_box").show();
    $("#gif_box").hide();
    $("#result_box").hide();
    $("#answer_box").show();
}
function answerScreen(){
	$("#starry_night").hide();
    $("#result_box").show();
    $("#timer").hide();
    $("#question_box").hide();
    $("#answer_box").hide();
    $("#gif_box").show();
}


// FINISHING
function game_over() { 

	$("#gif_box").hide();
	$("#starry_night").show();
    var score = "You answered " + correct + " out of 12 questions correctly! ";
    if( correct == 12) {
        score += "Your knowledge of the great Vincent Van Gogh is... A PERFECT MASTERPIECE!";
    }
    else if( correct >= 8) {
        score += "Your knowledge of the great Vincent Van Gogh is... AS DEEP AS THE PAINT ON HIS CANVASES!";
    }
    else if( correct >= 4) {
        score += "Your knowledge of the great Vincent Van Gogh is... NOT BAD!";
    }
    else if( correct < 4 && correct > 0 ) {
        score += "Your knowledge of the great Vincent Van Gogh is... LESS THAN STELLAR!";
    }
    else if( correct == 0) {
        score += "Your knowledge of the great Vincent Van Gogh is... ZILCH, ZIP, ZERO - ONE LESS PAINTING THAN HE SOLD DURRING HIS LIFETIME!";
    }
    $("#result_box").html(score);
    //restart
    $("#start_button").text("Click here to RESTART");
    $("#start_button").show();
    // $('#start_button').click(setup);
    console.log(score);
}

	









