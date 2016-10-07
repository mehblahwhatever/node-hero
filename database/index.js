const express = require('express');
const fs = require('fs');
const app = express();

app.post('/users', function (req, res) {
	// retrieve user posted data from the body
	const user = req.body;
	fs.appendToFile('users.txt', JSON.stringify({
		name: user.name,
		age: user.age
	}), (err) => {
		res.send('successfully registered');
	});
});

app.listen(3000);