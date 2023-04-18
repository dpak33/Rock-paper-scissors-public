const Player = require('./player.js');

class Battle {

  #outcome;

  permutations = {
    "rock": {
      "rock": "tie!",
      "paper": "player 2 wins!",
      "scissors": "player 1 wins!",
      "lizard": "player 1 wins!",
      "spock": "player 2 wins!"
    },
    "paper": {
      "rock": "player 1 wins!",
      "paper": "tie!",
      "scissors": "player 2 wins!",
      "lizard": "player 2 wins!",
      "spock": "player 1 wins!"
    },
    "scissors": {
      "rock": "player 2 wins!",
      "paper": "player 1 wins!",
      "scissors": "tie!",
      "lizard": "player 1 wins!",
      "spock": "player 2 wins!"
    },
    "lizard": {
      "rock": "player 2 wins!",
      "paper": "player 1 wins!",
      "scissors": "player 2 wins!",
      "lizard": "tie!",
      "spock": "player 1 wins!"
    },
    "spock": {
      "rock": "player 1 wins!",
      "paper": "player 2 wins!",
      "scissors": "player 1 wins!",
      "lizard": "player 2 wins!",
      "spock": "tie!"
    }
  };

  //scores = {"tie": }  Try and 


  // BELOW: IMPORTANT: we are mapping through the names we feed in and assigning the playernames to a player class each, thus
  //causing them to inherit the player class properties. Player expected a name property, which we are assigning here. currentPlayer
  //becomes the first one and otherPlayer becomes the second. 
  setup(names, playerClass = Player) {
    this.players = names.map(name => new playerClass(name));
  }
  //So above we map over the new Player we've instantiated, so that we can then feed it into
  //our router.get function of game.js at the point of instantiation. We're naming our Player class
  //playerClass in the paramaters.
  currentPlayer() {
    return this.players[0];
  }

  otherPlayer() {
    return this.players[1];
  }

  choice(choice1, choice2) {
    this.p1Choice = choice1.toLowerCase();
    this.p2Choice = choice2.toLowerCase();
    this.#outcome = this.permutations[this.p1Choice][this.p2Choice];
    (this.#outcome === "player 1 wins!") ? this.currentPlayer().gainPoint() : (this.#outcome === "player 2 wins!") ? this.otherPlayer().gainPoint() : null;
  }

  //I need a way to link the outcome with the score. If outcome is this, currentplayer score increases by 1 etc.
  //I'm going to be using the update feature in some way. 
  setOutcome(outcome) {
    this.#outcome = outcome;
  }

  getOutcome() {
    return this.#outcome;
  }
}

module.exports = Battle;