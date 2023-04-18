const assert = require('assert');
const Battle = require('../src/battle.js');
const Player = require('../src/player.js');
const chai = require('chai');
const expect = chai.expect;




describe('Battle', () => {
    describe('#setup()', () => {
        it('should set up the players with the given names and player class.', () => {
            const battle = new Battle();
            const names = ['Player 1', 'Player 2'];
            const playerClass = Player;
            battle.setup(names, playerClass);
            assert.equal(battle.players.length, 2);
        });
    });
});

describe('Battle', () => {
    describe('#setup()', () => {
        it('currentPlayer and otherPlayer should return the right elements in array', () => {
            const battle = new Battle();
            const names = ['Player 1', 'Player 2'];
            const playerClass = Player;
            battle.setup(names, playerClass);
            const result = battle.currentPlayer().name;
            assert.equal(result, 'Player 1');
        });
    });
});

describe('Battle', () => {
    describe('#setup()', () => {
        it('the names of the players should be sequentially equal to the names in the array', () => {
            const battle = new Battle();
            const names = ['Player 1', 'Player 2'];
            const playerClass = Player;
            battle.setup(names, playerClass);
            const result = battle.players[0].name;
            assert.equal(result, 'Player 1');
        });
    });
});
//Using mocha library's version of expect below to check instance match.
describe('Battle', () => {
    describe('#setup()', () => {
        it('should check that the items in the array match our instances of the Player class', () => {
            const battle = new Battle();
            const names = ['Player 1', 'Player 2'];
            const playerClass = Player;
            battle.setup(names, playerClass);
            expect(battle.players[0]).to.be.an.instanceof(Player);
        });
    });
});


describe('Battle', () => {
    describe('#choice()', () => {
        it('should generate the right outcomes depeding on the player choices', () => {
            const battle = new Battle();
            const names = ['Player 1', 'Player 2'];
            const playerClass = Player;
            battle.setup(names, playerClass);
            battle.choice('rock', 'rock');
            result = battle.getOutcome();
            expect(result).to.equal('tie!')
        });
    })
})

describe('Battle', () => {
    describe('#choice()', () => {
        it('should generate a draw when both players choose the same item', () => {
            const battle = new Battle();
            const names = ['Player 1', 'Player 2'];
            const playerClass = Player;
            battle.setup(names, playerClass);
            battle.choice('rock', 'rock');
            result = battle.getOutcome();
            expect(result).to.equal('tie!')
        });
    })
})

describe('Battle', () => {
    describe('#choice()', () => {
        it('should generate a win for p1 if p1 chooses spock and p2 chooses rock', () => {
            const battle = new Battle();
            const names = ['Player 1', 'Player 2'];
            const playerClass = Player;
            battle.setup(names, playerClass);
            battle.choice('spock', 'rock');
            result = battle.getOutcome();
            expect(result).to.equal('player 1 wins!')
        });
    })
})

describe('Battle', () => {
    describe('#choice()', () => {
        it('should generate a win for p1 if p1 chooses spock and p2 chooses rock', () => {
            const battle = new Battle();
            const names = ['Player 1', 'Player 2'];
            const playerClass = Player;
            battle.setup(names, playerClass);
            battle.choice('spock', 'rock');
            result = battle.getOutcome();
            expect(result).to.equal('player 1 wins!')
        });
    })
})

describe('Battle', () => {
    describe('#choice()', () => {
        it('should generate a win for p2 if p2 chooses spock and p1 chooses rock', () => {
            const battle = new Battle();
            const names = ['Player 1', 'Player 2'];
            const playerClass = Player;
            battle.setup(names, playerClass);
            battle.choice('rock', 'spock');
            result = battle.getOutcome();
            expect(result).to.equal('player 2 wins!')
        });
    })
})

describe('Battle', () => {
    describe('#choice()', () => {
        it('further choice tests', () => {
            const battle = new Battle();
            const names = ['Player 1', 'Player 2'];
            const playerClass = Player;
            battle.setup(names, playerClass);
            battle.choice('lizard', 'spock');
            result = battle.getOutcome();
            expect(result).to.equal('player 1 wins!')
        });
    })
})

describe('Battle', () => {
    describe('#choice()', () => {
        it('further choice tests', () => {
            const battle = new Battle();
            const names = ['Player 1', 'Player 2'];
            const playerClass = Player;
            battle.setup(names, playerClass);
            battle.choice('scissors', 'paper');
            result = battle.getOutcome();
            expect(result).to.equal('player 1 wins!')
        });
    })
})


describe('Battle', () => {
    describe('#choice()', () => {
        it('further choice tests', () => {
            const battle = new Battle();
            const names = ['Player 1', 'Player 2'];
            const playerClass = Player;
            battle.setup(names, playerClass);
            battle.choice('lizard', 'lizard');
            result = battle.getOutcome();
            expect(result).to.equal('tie!')
        });
    })
})


