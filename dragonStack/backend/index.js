const express = require('express');
const app = express();

const GenerationEngine = require('./engine');

const engine = new GenerationEngine();
const port = 3000;

engine.start();

// setTimeout(() => {
// 	engine.stop();
// }, 20000);

//////////////////////////////////////////

// const Generation = require('./generation');

// const generation = new Generation();

// console.log('generation', generation);

// const gooby = generation.newDragon();

// console.log('gooby', gooby);

// setTimeout(() => {
// 	const mimar = generation.newDragon();
// 	console.log('mimar', mimar);
// }, 5000);

//////////////////////////////////////////

// const Dragon = require('./dragon');

// const fooey = new Dragon({
// 	birthdate: new Date(),
// 	nickname: 'fooey'
// });
// const baloo = new Dragon({
// 	birthdate: new Date(),
// 	nickname: 'baloo',
// 	traits: [ { traitType: 'backgroundColor', traitValue: 'green' } ]
// });

// const mimar = new Dragon();
// setTimeout(() => {
// 	const gooby = new Dragon();
// 	console.log('gooby', gooby);
// }, 3000);

// console.log('fooey', fooey);
// console.log('baloo', baloo);
// console.log('mimar', mimar);
app.get('/dragon/new', (req, res) => {
	res.json({ dragon: engine.generation.newDragon() });
});

app.listen(port, () => console.log(`listening on port ${port}`));
