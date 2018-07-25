import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const should = chai.should(); //eslint-disable-line

chai.use(chaiHttp);

describe('Test for API endpoints', () => {
  describe('GET /api/devAttr', () => {
    it('should return a list of dev attributes', (done) => {
      chai.request(server)
        .get('/api/devAttr')
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('devAttributes');
          res.body.data.devAttributes.should.be.an('array');
          done();
        });
    });

    it('should return a single dev attributes', (done) => {
      chai.request(server)
        .get('/api/devAttrSkills')
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('devAttrSkills');
          res.body.data.devAttrSkills.should.be.an('array');
          done();
        });
    });

    it('should return a single dev attributes', (done) => {
      chai.request(server)
        .get('/api/devAttr/1')
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('devAttribute');
          res.body.data.devAttribute.should.be.an('object');
          res.body.data.devAttribute.should.have.property('id');
          res.body.data.devAttribute.should.have.property('name');
          res.body.data.devAttribute.should.have.property('devAttributeSkills');
          done();
        });
    });

    it('should return a single dev attributes', (done) => {
      chai.request(server)
        .get('/api/devAttr/-1')
        .end((err, res) => {
          res.body.should.be.an('object');
          res.body.should.have.property('error');
          res.body.error.should.have.property('message');
          done();
        });
    });
  });
});
