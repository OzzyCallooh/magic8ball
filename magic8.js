const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
});

const responses = [
	"It is certain.", "It is decidedly so.", "Without a doubt.",
	"Yes - definitely.", "Yes.", "You may rely on it.", "As I see it, yes.",
	"Most likely.", "Outlook good.", "Signs point to yes.",

	"Reply hazy, try again", "Ask again later.", "Better not tell you now.",
	"Cannot predict now.", "Concentrate and ask again.",

	"Don't count on it.", "My reply is no.", "My sources say no.",
	"Outlook not so good.", "Very doubtful."
];

function processAnswer(answer) {
	var idx = Math.floor(Math.random() * responses.length);
	console.log(responses[idx]);

	rl.close();
}

readline.question("What is your question?\n> ", processAnswer);
