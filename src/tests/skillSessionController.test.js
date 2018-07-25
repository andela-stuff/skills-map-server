import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const should = chai.should(); //eslint-disable-line

chai.use(chaiHttp);

describe('Test for API endpoints', () => {
  describe('GET /api/skillSessions', () => {
    it('should return a list of dev attributes', (done) => {
      chai.request(server)
        .get('/api/skillSessions')
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('skillSessions');
          res.body.data.skillSessions.should.be.an('array');
          done();
        });
    });

    it('should return a single dev attributes', (done) => {
      chai.request(server)
        .get('/api/skillSessionSkills')
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('skillSessionSkills');
          res.body.data.skillSessionSkills.should.be.an('array');
          done();
        });
    });

    it('should return a single dev attributes', (done) => {
      chai.request(server)
        .get('/api/skillSessions/1')
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('skillSession');
          res.body.data.skillSession.should.be.an('object');
          res.body.data.skillSession.should.have.property('id');
          res.body.data.skillSession.should.have.property('name');
          res.body.data.skillSession.should.have.property('skillSessionSkills');
          done();
        });
    });

    it('should return a single dev attributes', (done) => {
      chai.request(server)
        .get('/api/skillSessions/-1')
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.should.have.property('error');
          res.body.error.should.have.property('message');
          done();
        });
    });
  });
});
