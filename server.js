// Import NPM Dependencies
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Configure ENV
dotenv.config({ path: './config/config.env' });

// Connect to Database
connectDB();

// init server
const app = express();

// Enable body middleware
app.use(express.json());


// * App env settings
// In Development
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// In Production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
}

// Configure App Port
const PORT = process.env.PORT || 5000;

// Run App
app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);
