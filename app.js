const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes/index.js');
const gameRouter = require('./routes/game.js');
const outcomeRouter = require('./routes/outcome.js');

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/outcome', outcomeRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

//You need to export the app object in order to use it in your router tests!

module.exports = app;