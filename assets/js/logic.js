
// Function to pick a random element from an array of questions.
// The function will then remove the question from the array to avoid duplication of questions.

function pickQuestion(pickQuestions)
{
	if(pickQuestions.length === 0)
	{
		return false;
	}
	var arrayIndex = Math.floor(Math.random() * pickQuestions.length);
	var returnQuestion = pickQuestions[arrayIndex];
	pickQuestions.splice(arrayIndex,1);
	return returnQuestion;
}

// Create a new array with the questions randomised so the quiz is different every time.

//console.log(tmpQuestions);

function randomiseQuestions()
{
	let tmpQuestions = quizQuestions.slice();
	rquizQuestions = [];
	while(tmpQuestions.length > 0)
	{
		rquizQuestions.push(pickQuestion(tmpQuestions));
	}
	console.log(rquizQuestions);
}
randomiseQuestions();