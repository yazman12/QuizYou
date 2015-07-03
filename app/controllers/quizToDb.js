function quizToDb (newQuiz) {
	var Quiz = require('../models/quiz.js'),
		quiz = new Quiz();

	quiz.author = newQuiz.author;
	quiz.title = newQuiz.title;

	quiz.questions = newQuiz.questions;

	quiz.save(function (err, saved) {
		if (err)
			return err;

		return saved;
	});
}

module.exports = quizToDb;