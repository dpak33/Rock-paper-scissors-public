const request = require('supertest');
const app = require('../app');

//IMP: I've changed my test script to allow automated testing with mocha and chai, thus
//preventing the need to start the app manually in the terminal to check router connections


describe('GET /', function () {
    it('responds with status code 200', function (done) {
        console.log(app);
        request(app)
            .get('/')
            .expect(200, done);
    });

    it('responds with HTML', function (done) {
        request(app)
            .get('/')
            .expect('Content-Type', /html/)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
});















