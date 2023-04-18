const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;
const assert = require('assert');


//See bottom for use of regular expressions to ensure match between input strings in raw form and expectations
describe('GET /outcome', function () {
    it('renders the outcome screen with player scores', function (done) {
        const battle = {
            currentPlayer: () => ({ name: 'John', score: 0 }),
            otherPlayer: () => ({ name: 'Jane', score: 0 }),
            p1Choice: 'rock',
            p2Choice: 'scissors',
            getOutcome: () => 'Player 1 wins!',
        };
        app.locals.battle = battle;

        request(app)
            .get('/outcome')
            .expect('Content-Type', /html/)
            .expect(200)
            .expect(/<h2>\s*John chose rock\s*<\/h2>/)
            .expect(/<h2>\s*Jane chose scissors\s*<\/h2>/)
            .expect(/<h2>\s*Player 1 wins!\s*<\/h2>/)
            .expect(/<h2>\s*0 : 0\s*<\/h2>/)
            .end(done);
    });
});

describe('POST /outcome', function () {
    const battle = {
        p1Choice: null,
        p2Choice: null,
        outcome: null,
        choice: function (p1Choice, p2Choice) {
            this.p1Choice = p1Choice;
            this.p2Choice = p2Choice;
            // Set the outcome based on the choices
            // (replace with your own logic)
            if (p1Choice === 'rock' && p2Choice === 'scissors') {
                this.outcome = 'Player 1 wins!';
            } else {
                this.outcome = 'Player 2 wins!';
            }
        }
    };

    it('calls the Battle.choice() method and redirects to /outcome', function (done) {
        app.locals.battle = battle;

        request(app)
            .post('/outcome')
            .send({ player1Selection: 'rock', player2Selection: 'scissors' })
            .expect(302)
            .expect('Location', '/outcome')
            .end(function (err, res) {
                if (err) return done(err);

                // Check that the Battle.choice() method was called with the correct choices
                assert.equal(battle.p1Choice, 'rock');
                assert.equal(battle.p2Choice, 'scissors');

                done();
            });
    });
});