const assert = require('assert');
const Player = require('../src/player.js');


describe('checking we can set up a player with a name', () => {
    it('should create a new player with the name I assign', () => {
        const playerName = new Player('Dom');
        const result = playerName.name;
        assert.equal(result, 'Dom');
    })
});

describe('checking that score starts at 0', () => {
    it('should create a new player with default score of 0', () => {
        const playerName = new Player();
        const result = playerName.score;
        assert.equal(result, 0);
    })
});

describe('checking that gainPoint method works', () => {
    it('should create a new player with default score of 0', () => {
        const playerName = new Player();
        playerName.gainPoint();
        const result = playerName.score;
        assert.equal(result, 1);
    })
});

