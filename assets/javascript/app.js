var correct = 0;
var incorrect = 0;

var timer; //the timer object.
var qNumber = 0; //what quesiton number the user is on
var questions = ["In what country was Vincent Van Gogh born?", "How old was Van Gogh when he painted his first piece?","How much time did Van Gogh spend formally studying art in school?", "What fellow painter did Van Gogh attempt to attack, resulting in his famous ear injury?", "The Starry Night was painted in which country?"];
var answer1s = ["France", "8", "none", "Paul Gauguin", "Netherlands"];
var answer2s = ["Netherlands", "10", "a few months", "Henri Matisse", "Denmark"];
var answer3s = ["Belgium", "12", "One year", "Andre Derain", "France"];
var answer4s = ["Germany", "27", "Three years", "Maurice de Vlaminck", "Germany"];
var correctAns = [2, 4, 2, 1, 3];
var interesting_fact = ["Vincent van Gogh was born on March 30, 1853, in Groot-Zundert, Netherlands. He was named after his grandfather and his stillborn brother who died one year before Van Gogh was born.","Vincent was supposed to follow in his father's footsteps and become a Pastor", "Vincent studied art at the academy of fine art in Antwerp but only remained at the Academy for a few months due to disagreements with his tutors. For example, he thought that he should be in an advanced drawing class but the tutor felt he wasn't skilled enough, and wanted to move him to the preparatory class.", "During one of his seizures, Van Gogh attempted to attack his friend Paul Gauguin with an open razor. This ultimately resulted in Vincent cutting off a piece of his own ear – but not the whole ear as is often rumored. A new study claims Vincent Van Gogh may have made up the story to protect painter Paul Gauguin who actually lopped it off with a sword during an argument.","Van Gogh created his most famous work, “The Starry Night”, while staying in an asylum in Saint-Remy-de-Provence, France."]
var timeLeft = 30;
var gifs = [ "./assets/images/NatalyaStClairVanGogh1-Fact1.gif"]


var start_game = function(){};
var game_over = function() { 

	alert("You answered" + correct + " questions correctly");

}

	
var load_question = function() { 

	if (!questions[qNumber]) {
		game_over();
		return;
	}
	//pick a random qustion, put it on the screen & whatever
	$("#question_box").html(questions[qNumber]);
	$('#answer_1_text').html(answer1s[qNumber]);
	$('#answer_2_text').html(answer2s[qNumber]);
	$('#answer_3_text').html(answer3s[qNumber]);
	$('#answer_4_text').html(answer4s[qNumber]);

	// qNumber = qNumber + 1;
}

var update = function() {
	timeLeft = timeLeft - 1;
	
	$('#timer_sec').html(timeLeft);
	if (timeLeft <= 0)

	{
		$("#gif_box").html("<img src='" + gifs[qNumber] + "'>");

				$("#result_box").text("That's incorrect! " + interesting_fact[qNumber]);
				$("#gif_box").show();

				$("#result_box").show();
				$("#timer").hide();
				$("#question_box").hide();
				$("#answer_box").hide();


			qNumber++;
				setTimeout(function() {
					$("#gif_box").hide();
					$("#result_box").hide();

					timeLeft = 30;
					update();
					$("#timer").show();
					$("#question_box").show();
					$("#answer_box").show();
					load_question();
				}, 5000);
				incorrect++;
	}
		



}


$(document).ready(function() {
	$("#timer").hide();
	$("#question_box").hide();
	$("#answer_box").hide();
	$("#gif_box").hide();
	$("#result_box").hide();

	//when start button is clicked, start game
	$('#start_button').click(function() {
		start_game();
		var game_finished = false;
		var correct_answers = 0;
		var incorrect_answers = 0;

		//set 30 seccond count down
		window.clearInterval(timer);
		timer = window.setInterval(update, 1000);

		$('#question_box').html($('#question_1'));
		$("#intro").hide();
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
				var nextButton = $(this).attr('id');
				// alert("Clicked " + $(this).attr('id'));  

				console.log( Number(nextButton[nextButton.length - 1]));
				console.log(correctAns[qNumber]);

			if( Number(nextButton[nextButton.length - 1]) === correctAns[qNumber]) {
			

				$("#result_box").text("That's correct! " + interesting_fact[qNumber]);

				correct++;

			}

			else{

				$("#result_box").text("That's incorrect! " + interesting_fact[qNumber]);
				incorrect++;
			}

				$("#gif_box").html("<img src='" + gifs[qNumber] + "'>");
				$("#gif_box").show();

				$("#result_box").show();
				$("#timer").hide();
				$("#question_box").hide();
				$("#answer_box").hide();


			qNumber++;
				setTimeout(function() {
					$("#gif_box").hide();
					$("#result_box").hide();

					timeLeft = 30;

					update();
					$("#timer").show();
					$("#question_box").show();
					$("#answer_box").show();
					load_question();
				}, 5000);
			


			});
			//when button clicked, what do we do? (depends on button # & current question)


			
		}


	});
})


