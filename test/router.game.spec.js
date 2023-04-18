const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;
const express = require('express');
const router = require('../routes/game');


describe('POST /', function () {
    it('creates a new battle and redirects to /game', function (done) {
        request(app)
            .post('/game')
            .send({ player1: 'John', player2: 'Jane' })
            .expect(302)
            .expect('Location', '/game')
            .end(done);
    });
});

it('renders the game screen', function (done) {
    const battle = { currentPlayer: () => ({ name: 'John' }), otherPlayer: () => ({ name: 'Jane' }) };
    app.locals.battle = battle;
    console.log('app.locals.battle:', app.locals.battle); // check the mock battle object

    request(app)
        .get('/game')
        .expect('Content-Type', /html/)
        .expect(200)
        .end(done);
});


// Mock the Battle object and set it as a local variable for the app
const mockBattle = {
    currentPlayer: () => ({ name: 'Player 1' }),
    otherPlayer: () => ({ name: 'Player 2' }),
};
app.locals.battle = mockBattle;

describe('GET /game', function () {
    it('should render the game view with player names', function (done) {
        request(app)
            .get('/game')
            .expect(200)
            .expect('Content-Type', /html/)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.text).to.contain('Player 1');
                expect(res.text).to.contain('Player 2');
                done();
            });
    });
});