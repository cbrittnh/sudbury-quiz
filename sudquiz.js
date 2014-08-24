$(document).ready(function() {
	var question = 1;
	var answer = "";
	var numberCorrect = 0;
	$('#startButton').on('click', function() {
		$('#startPage').hide();
		showQuest1();
	});
	
	/*--- Display information modal box ---*/
 $("#answers").click(function(){
   $(".overlay").fadeIn(1000);
 });

 /*--- Hide information modal box ---*/
 $("a.close").click(function(){
   $(".overlay").fadeOut(1000);
 });

		/*--- Show functions to show the next question ---*/
	function showQuest1() {
		$('#quest1').show();
		correctAnswer = "1639";
		console.log(correctAnswer);
	}
	function showQuest2() {
		$('#quest2').show();
		answer = "";
		question++;
		correctAnswer = "The Hosmer House";
		console.log(correctAnswer);
	}
	function showQuest3() {
		$('#quest3').show();
		answer = "";
		question++;
		correctAnswer = "The Wayside Inn";
		console.log(correctAnswer);
	}
	function showQuest4() {
		$('#quest4').show();
		answer = "";
		question++;
		correctAnswer = "James Abram Garfield";
		console.log(correctAnswer);
	}
	function showQuest5() {
		$('#quest5').show();
		answer = "";
		question++;
		correctAnswer = "Henry Ford";
		console.log(correctAnswer);
	}
	function showQuest6() {
		$('#quest6').show();
		answer = "";
		question++;
		correctAnswer = "1929";
		console.log(correctAnswer);
	}
	function showQuest7() {
		$('#quest7').show();
		answer = "";
		question++;
		correctAnswer = "Dutton Road";
		console.log(correctAnswer);
	}
	function showQuest8() {
		$('#quest8').show();
		answer = "";
		question++;
		correctAnswer = "346";
		console.log(correctAnswer);
	}
	function showQuest9() {
		$('#quest9').show();
		answer = "";
		question++;
		correctAnswer = "The Martha Mary Chapel";
		console.log(correctAnswer);
	}
	function showQuest10() {
		$('#quest10').show();
		answer = "";
		question++;
		correctAnswer = "P.R.I.D.E.";
		console.log(correctAnswer);
	}

	function showScore() {
		$('#score').show();
		if (numberCorrect >= 10) {
			$('#statement').text('You must of grown up in Sudbury!');
			$('#finalScore').text("You got " + numberCorrect +" out of 10 correct!");
		} 
		else if (numberCorrect >= 8) {
			$('#statement').text('Good Job!');
			$('#finalScore').text("You got " + numberCorrect +" out of 10 correct!");
		}
		else if (numberCorrect >=6) {
			$('#statement').text('Better Luck Next Time!');
			$('#finalScore').text("You got " + numberCorrect +" out of 10 correct.");
		}
		else {
			$('#statement').text('Sorry, you need to study...');
			$('#finalScore').text("You got " + numberCorrect +" out of 10 correct.");
		}
	}

	/*--- Submit function to hide current question and call function to show next question ---*/
	$('#s1').on('click',function() {
		if (answer.length > 0) {
			$('#quest1').hide();
			checkAnswer();
			showQuest2();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s2').on('click',function() {
		if (answer.length > 0) {
			$('#quest2').hide();
			checkAnswer();
			showQuest3();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s3').on('click',function() {
		if (answer.length > 0) {
			$('#quest3').hide();
			checkAnswer();
			showQuest4();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s4').on('click',function() {
		if (answer.length > 0) {
			$('#quest4').hide();
			checkAnswer();
			showQuest5();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s5').on('click',function() {
		if (answer.length > 0) {
			$('#quest5').hide();
			checkAnswer();
			showQuest6();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s6').on('click',function() {
		if (answer.length > 0) {
			$('#quest6').hide();
			checkAnswer();
			showQuest7();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s7').on('click',function() {
		if (answer.length > 0) {
			$('#quest7').hide();
			checkAnswer();
			showQuest8();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s8').on('click',function() {
		if (answer.length > 0) {
			$('#quest8').hide();
			checkAnswer();
			showQuest9();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s9').on('click',function() {
		if (answer.length > 0) {
			$('#quest9').hide();
			checkAnswer();
			showQuest10();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s10').on('click',function() {
		if (answer.length > 0) {
			$('#quest10').hide();
			checkAnswer();
			showScore();
		} else {
		alert('Please select an answer.')
		}	
	});

	/*--- Selecting the answers ---*/
	$('.answer').on('click', function() {
		$('.answer').removeClass('selectedAnswer');
		$(this).addClass('selectedAnswer');
		answer = $(this).text();
		console.log(answer);
	});

	/*--- Check if answer is correct ---*/
	function checkAnswer() {
		if (question == 1 && answer == correctAnswer) {
			numberCorrect++
			console.log(numberCorrect);
		}
		else if (question == 2 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 3 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 4 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 5 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 6 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 7 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 8 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 9 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 10 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else {
			console.log(numberCorrect);
		}
	}

	/*--- Play Again ---*/
	$('#playAgain').on('click',function() {
		$('#score').hide();
		$('#startPage').show();
		correctAnswer = "";
		question = 1;
		numberCorrect = 0;
	});	
});