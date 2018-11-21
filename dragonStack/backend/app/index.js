const express = require('express');
const cors = require('cors');
const app = express();

const GenerationEngine = require('./generation/engine');

const dragonRouter = require('./api/dragon');

const generationRouter = require('./api/generation');

const engine = new GenerationEngine();

app.locals.engine = engine;
app.use(cors({ origin: 'http://localhost:1234' }));
app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

app.use((err, rec, res, next) => {
	const statusCode = err.statusCode || 500;

	res.status(statusCode).json({
		type: 'error',
		message: err.message
	});
});

engine.start();

module.exports = app;
