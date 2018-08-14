import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const should = chai.should(); //eslint-disable-line

chai.use(chaiHttp);

describe('Test for API endpoints', () => {
  describe('GET /api/skills', () => {
    it('should return a list of skills', (done) => {
      chai.request(server)
        .get('/api/skills')
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('skills');
          res.body.data.skills.should.be.an('array');
          done();
        });
    });

    it('should return an object containing a single skill', (done) => {
      chai.request(server)
        .get('/api/skills/17')
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('skill');
          res.body.data.skill.should.be.an('object');
          res.body.data.skill.should.have.property('id');
          res.body.data.skill.should.have.property('name');
          res.body.data.skill.should.have.property('level');
          done();
        });
    });
  });
});
