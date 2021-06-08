require('dotenv').config();

const express = require("express");
const app = express();
const path = require("path");
const sendMail = require('./Public/javascripts/mail.js');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'Public')));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.post("/contact", (req, res) => {
	const { email, subject, text } = req.body;
	console.log('Data: ', req.body);
	sendMail(email, subject, text, function(err, data) {
		if (err) {
			res.status(500).json({ message: 'Internal Error' });
		} else {
			res.json({ message: 'Email sent' });
		}
	});
});

app.get("/", (req, res) => {
	res.render("index");
	console.log("go it")
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("listening");
});