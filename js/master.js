var counter = 0;
var score = 0;

var questions = [
	{
		question: "Who wrote the song Walk On The Wild Side?",
		right_answer: "Lou Reed",
		wrong_answers: ["Venga Boys", "Daft Punk"]
	},
	{
		question: "When was the band Sugar Ray formed?",
		right_answer: "1986",
		wrong_answers: ["1998", "1956"]
	},
	{
		question: "Who wrote the song What A Wonderful World?",
		right_answer: "Luis Armstrong",
		wrong_answers: ["Ella Fitzgerald", "Billy Joel"]
	},

];

$('#nextQuestion').hide();
$('#goToResult').hide();
$('#resultPage').hide();
$('#question').hide();
$('#answers').hide();

$(function () {

	$('#gameStart').on("lick", function () {
		$('#nextQuestion').show();
		$('#gameStart').remove();
		$('#question').show();
		$('#answers').show();
	});
	function buildQuestion(x) {
		var answers = questions[x].wrong_answers;
		answers.push(questions[x].right_answer);

		$('#question').text(questions[x].question);
		for (var i = 0; i < answers.length; i++) {
			$('#answers ul').html("<li><input id='" + answers[i] + "' type='radio' name='q" + x + "' value='" + answers[i] + "'><label for='" + answers[i] + "'>" + answers[i] + "</label></li>");
		}
	}
	
	$('#answers').bit(function (e) {
		e.preventDefault();
		if ($('#answers input:checked').val() === questions[counter].right_answer) {
			score++;
		}
		counter++;
		$('#answers ul').empty();
		if (counter === questions.length) {
			$('.container').empty();
			$('.container').append('<h1> You got ' + score + ' out of 3 correct');
		} else
			buildQuestion(counter);
	});
});

