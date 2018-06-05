
ABOUT Vincent Van Gogh Trivia Game:

Vincent Van Gogh Trivia Game is a JavaScript homework assignment. Instructions were as follows: 

-You'll create a trivia game that shows only one question until the player answers it or their time runs out.

-If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

-The scenario is similar for wrong answers and time-outs.

	-If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next 	question.

	-If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few 	seconds, then show the next question.


-On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).


TECH USED: HTML, CSS, JavaScript, JQuery

HIGHLIGHT CODE:

This function called “timerUpdate” uses variable “timeLeft” which was previously declared and set to 30 seconds. It subtracts 1 from time remaining. If “timeLeft” is lesser than or equal to 0, it adds one to your “incorrect response count”, displays “You RAN OUT OF TIME!” on the page(as well as an interesting fact about Van Gogh), and calls the “questionAnswer” function, which triggers a GIF to be displayed.

	function timerUpdate() {

	timeLeft = timeLeft - 1;

	$('#timer_sec').html(timeLeft);

	if (timeLeft <= 0)

	{

		incorrect++;

      	$("#result_box").text("You RAN OUT OF TIME! " + interesting_fact[qNumber]);

      	questionAnswered();



    }


CONCLUSION: 
	Completing this assignment gave me an introduction on how to use JQuery and JavaScript to create a more complex game and use timeouts. 

GRADE: A

INSTRUCTOR COMMENT:

from David Hammond 
December 11th, 8:19 pm

Nate, really fantastic job, the front end looked really clean, everything operated as expected. The overall user experience was really nice! Great job!
