const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const battle = req.app.locals.battle;
  const p1Choice = req.body.player1Selection;
  const p2Choice = req.body.player2Selection;
  battle.choice(p1Choice, p2Choice);

  res.redirect('/outcome')
})

// I need to figure out where
router.get('/', (req, res) => {


  res.render('outcome', {
    player1: req.app.locals.battle.currentPlayer().name,
    player2: req.app.locals.battle.otherPlayer().name,
    p1Choice: req.app.locals.battle.p1Choice,
    p2Choice: req.app.locals.battle.p2Choice,
    p1Score: req.app.locals.battle.currentPlayer().score,
    p2Score: req.app.locals.battle.otherPlayer().score,
    outcome: req.app.locals.battle.getOutcome(),
  });
})


module.exports = router;
