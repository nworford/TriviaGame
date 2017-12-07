var correct = 0;
var incorrect = 0;

var timer; //the timer object.
var qNumber = 0; //what quesiton number the user is on
var questions = ["In what country was Vincent Van Gogh born?", "How old was Van Gogh when he painted his first piece?","How much time did Van Gogh spend formally studying art in school?", "What fellow painter did Van Gogh attempt to attack, resulting in his famous ear injury?", "“The Starry Night” was painted in which country?", /* 6 */ "The swirling, stormy patterns in many of his paintings is known as what?", /* 7 */ "In his ten years of painting, Van Gogh is said to have made approximately how many paintings?", /* 8 */ "Van Gogh was known to apply paint so thickly that the texture of brush strokes or palette knife are clearly visible. This technique is called what?", /* 9 */ "How many paintings did Van Gogh sell in his lifetime?", /* 10 */ "The most expensive Van Gogh piece ever sold for how much(adjusted for inflation)?", /* 11 */ "How did Van Gogh die?", /* 12 */ "After Van Gogh’s death, who dedicated himself/herself to sharing his work with the world?"];
var answer1s = ["France", "8", "none", "Paul Gauguin", "Netherlands", /* 6 */ "atmosphere", /* 7 */"300", /* 8 */ "impasto", /* 9 */ "0", /* 10 */ "$52 million", /* 11 */ "gunshot", /* 12 */ "Vincent's mother"];
var answer2s = ["Netherlands", "10", "a few months", "Henri Matisse", "Denmark", /* 6 */ "ambiance", /* 7 */ "500", /* 8 */ "spackle", /* 9 */ "1", /* 10 */ "$102 million", /* 11 */ "hanging", /* 12 */ "Vincent's father"];
var answer3s = ["Belgium", "12", "One year", "Andre Derain", "France", /* 6 */ "turbulence", /* 7 */ "700", /* 8 */ "fresco", /* 9 */ "58", /* 10 */ "$152 million", /* 11 */ "illness", /* 12 */ "Vincent's brother's wife"];
var answer4s = ["Germany", "27", "Three years", "Maurice de Vlaminck", "Germany",/* 6 */ "distortion", /* 7 */ "900", /* 8 */ "smear", /* 9 */ "167", /* 10 */ "$202 million", /* 11 */ "poisoning", /* 12 */ "Vincent's friend Paul Gauguin"];
var correctAns = [2, 4, 2, 1, 3, 3, 4, 1, 2, 3, 1, 3];
var interesting_fact = ["Vincent van Gogh was born on March 30, 1853, in Groot-Zundert, Netherlands. He was named after his grandfather and his stillborn brother who died one year before he was born.","Vincent was 27 years old when he started painting. He was supposed to follow in his father's footsteps and become a Pastor.", "Vincent went to art school but only stayed for a few months due to disagreements with his tutors. He thought that he should be in an advanced drawing class but the tutor felt he wasn't skilled enough, and wanted to move him to the preparatory class.", "During one of his seizures, Van Gogh attacked his friend Paul Gauguin with an open razor. This reportedly resulted in Vincent cutting off a piece of his own ear – but not the whole ear as is often rumored. A new study claims Vincent Van Gogh may have made up the story to protect painter Paul Gauguin, who actually lopped it off with a sword during an argument.","Van Gogh created his most famous work, “The Starry Night”, while staying in an asylum in Saint-Remy-de-Provence, France.", /* 6 */ "The answer is “turbulence”! Mathematical analysis of his work reveals that the stormy patterns in many of his paintings are uncannily like real turbulence, as seen in swirling water or the air from a jet engine.",/* 7 */"Van Gogh was incredibly prolific in his 10 years of making art. He created around 900 paintings and 1100 sketches/pencil drawings.", /* 8 */ "With the aid of technology, researchers detected that there was wet paint deep inside a Van Gogh painting. After more than 100 years the paint still hadn't dried! One researcher came across the body of a tiny grashopper submerged in the paint of one of Van Gogh's pieces.", /* 9 */ "Van Gogh sold just one painting, “The Red Vineyard” (pictured above), during his lifetime. He became famous only after his death. When Van Gogh first began painting, he used peasants as models. He would later paint flowers, landscapes and himself, mostly because he was too poor to pay the models.", /* 10 */ "The most expensive Van Gogh piece ever sold, “Portrait of Dr. Gachet” (pictured above) , sold in 1990 for $152 million (adjusted to inflation). Several of his paintings have been sold for in excess of $50 million.", /* 11 */ "He was found with a bullet in his chest. Van Gogh died in 1890 under mysterious circumstances. He was thought to have committed suicide by shooting himself in the chest, but a recent theory suggests he might have been shot by a local teenager.", /* 12 */ "Van Gogh’s work began to shoot to fame eleven years after his death due to the diligence of his brother Theo’s wife. She collected his letters and paintings and dedicated herself to getting Vincent Van Gogh’s work the recognition it deserved."]
var timeLeft = 30;
var gifs = [ "./assets/images/q1.gif", "./assets/images/q2.gif","./assets/images/q3.gif", "./assets/images/q4.gif", "./assets/images/q5.gif", "./assets/images/q6.gif", "./assets/images/q7.gif", "./assets/images/q8.gif", "./assets/images/q9.2.png", "./assets/images/q10.jpg", "./assets/images/q11.gif", "./assets/images/q12.gif" ]


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
				}, 8000);
				incorrect++;
	}
		



}


$(document).ready(function() {
	$("#intro_pic").show();
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
				}, 8000);
			


			});
			//when button clicked, what do we do? (depends on button # & current question)


			
		}


	});
})


