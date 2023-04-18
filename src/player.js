class Player {

  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  gainPoint() {
    this.score++;
  }
}

module.exports = Player;
