import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const should = chai.should(); //eslint-disable-line

chai.use(chaiHttp);

describe('Test for API endpoints', () => {
  describe('GET /api/lms', () => {
    it('should return a list of dev attributes', (done) => {
      chai.request(server)
        .get('/api/lms')
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('lmsOutputs');
          res.body.data.lmsOutputs.should.be.an('array');
          done();
        });
    });

    it('should return a single dev attributes', (done) => {
      chai.request(server)
        .get('/api/lmsSkills')
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('lmsSkills');
          res.body.data.lmsSkills.should.be.an('array');
          done();
        });
    });

    it('should return a single dev attributes', (done) => {
      chai.request(server)
        .get('/api/lms/1')
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('lmsOutput');
          res.body.data.lmsOutput.should.be.an('object');
          res.body.data.lmsOutput.should.have.property('id');
          res.body.data.lmsOutput.should.have.property('name');
          res.body.data.lmsOutput.should.have.property('lmsOutputSkills');
          done();
        });
    });

    it('should return a single dev attributes', (done) => {
      chai.request(server)
        .get('/api/lms/-1')
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.should.have.property('error');
          res.body.error.should.have.property('message');
          done();
        });
    });
  });
});
