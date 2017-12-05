




var timer; //the timer object.
var qNumber = 0; //what quesiton number the user is on
var questions = ["In what country was Vincent Van Gogh born?", "How old was vg when he painted?"];
var answer1s = ["France", "8"]
var answer2s = ["Netherlands", "10"];
var answer3s = ["Belgium", "12"];
var answer4s = ["Germany", "27"];
var correctAns = [2, 4]
var timeLeft = 30;


var start_game = function() { 

}

var load_question = function() { 
	//pick a random qustion, put it on the screen & whatever
	$("#question_box").html(questions[qNumber]);
	$('#answer_1_text').html(answer1s[qNumber]);
	$('#answer_2_text').html(answer2s[qNumber]);
	$('#answer_3_text').html(answer3s[qNumber]);
	$('#answer_4_text').html(answer4s[qNumber]);

	qNumber = qNumber + 1;
}

var update = function() {
	timeLeft = timeLeft - 1;
	
	$('#timer_sec').html(timeLeft);
}


$(document).ready(function() {
	$("#timer").hide();
	$("#question_box").hide();
	$("#answer_box").hide();

	//when start button is clicked, start game
	$('#start_button').click(function() {
		start_game();
		var game_finished = false
		var correct_answers = 0
		var incorrect_answers = 0

		//set 30 seccond count down
		window.clearInterval(timer);
		timer = window.setInterval(update, 1000);

		$('#question_box').html($('#question_1'));

		$("#start_button").hide();
		$("#timer").show();
		$("#question_box").show();
		$("#answer_box").show();
		load_question();

		for(var i=1;i<=4;i++)
		{
			var nextButton = "#answer_" + i;
			console.log("Making " + nextButton + " clickable");
			$(nextButton).click(function(event) {
				alert("Clicked " + $(event).id);
			});
			//when button clicked, what do we do? (depends on button # & current question)

			
		}


	});
});



/*

		
	<div id="q1">
		<div id="question_1"> In what country was Vincent Van Gogh born? </div>
			<div> France </div>
			<div class="correct_answer"> Netherlands </div>
			<div> Germany </div>
			<div> Austria </div>

		<div class="interesting_fact"> Vincent van Gogh was born on March 30, 1853, in Groot-Zundert, Netherlands. He was named after his grandfather and his stillborn brother who died one year before Van Gogh was born. </div>

		<div class="gif_file" src="./assets/images/NatalyaStClairVanGogh1-Fact1.gif"></div>

	</div> 

	<!-- 1 -->
	<div id="q2">
		<div id="question_2"> How old was Van Gogh when he painted his first piece? </div>
			<div> 8 </div>
			<div> 16 </div>
			<div> 22 </div>
			<div class="correct_answer"> 27 </div>

		<div class="interesting_fact">  </div>

		<div class="gif_file" src="./assets/images/NatalyaStClairVanGogh2-Fact2.gif"></div>
	</div> <!-- 2 -->

	<div id="q3">
		<div id="question_3"> How long did Van Gogh spend formally studying art in school? </div>
			<div> None </div>
			<div class="correct_answer"> a few months</div>
			<div> One year </div>
			<div > Two years </div>

		<div class="interesting_fact"> Vincent studied art at the academy of fine art in Antwerp but only remained at the Academy for a few months due to disagreements with his tutors. For example, he thought that he should be in an advanced drawing class but the tutor felt he wasn't skilled enough, and wanted to move him to the preparatory class.
		 </div>

		<div class="gif_file" src="./assets/images/antwerp.jpg"></div>
	</div> <!-- 3 -->

	<div id="q4">
		<div id="question_4"> What fellow painter did Van Gogh attempt to attack, resulting in his famous ear injury? </div>
			<div class="correct_answer"> Paul Gauguin </div>
			<div> Henri Matisse </div>
			<div> Paul Cezane </div>
			<div > Maurice De Vlaminck </div>

		<div class="interesting_fact"> During one of his seizures, Van Gogh attempted to attack his friend Paul Gauguin with an open razor. This ultimately resulted in Vincent cutting off a piece of his own ear – but not the whole ear as is often rumored. A new study claims Vincent Van Gogh may have made up the story to protect painter Paul Gauguin who actually lopped it off with a sword during an argument.
		 </div>

		<div class="gif_file" src="./assets/images/ear.gif"></div>
	</div> <!-- 4 -->

	<div id="q5">
		<div id="question_4"> “The Starry Night” was painted in which country? </div>
			<div class="correct_answer"> France </div>
			<div> Austria </div>
			<div> Belgium </div>
			<div > Netherlands </div>

		<div class="interesting_fact"> Van Gogh created his most famous work, “The Starry Night”, while staying in an asylum in Saint-Remy-de-Provence, France.
		 </div>

		<div class="gif_file" src="./assets/images/starrynight.gif"></div>
	</div> <!-- 5 -->

*/