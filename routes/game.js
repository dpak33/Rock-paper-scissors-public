const express = require('express');
const router = express.Router();
const Battle = require('../src/battle.js');
const Player = require('../src/player.js');


router.post('/', (req, res) => {


  const names = [req.body.player1, req.body.player2];
  const battle = new Battle();
  battle.setup(names);
  req.app.locals.battle = battle;
  res.redirect('/game');
})

router.get('/', (req, res) => {
  const player1 = req.app.locals.battle.currentPlayer().name;
  const player2 = req.app.locals.battle.otherPlayer().name;
  //So above we 
  res.render('game', {
    player1Name: player1,
    player2Name: player2,
  });
})

module.exports = router;

//We are creating a battle instance, assigning elements from our user inputs in the index.ejs file (req.body.player1)
  //to the indices in a list inside our instantiated class, redirecting the channel of the router and creating our
  // two player objects out of our one battle object, each of which has a name equal to the name entered into
  //our index.js file. We then render to our game.ejs file. 