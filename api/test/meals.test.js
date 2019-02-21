/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

process.env.NODE_ENV = 'test';

describe('Meals', () => {
  // Test to get all meals record
  describe('GET /api/v1/meals', () => {
    it('should get all meals record', (done) => {
      chai.request(app)
        // Test to get all meals record
        .get('/api/v1/meals')
        .end((err, res) => {
          res.should.have.status(200);
          // eslint-disable-next-line no-unused-expressions
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          res.body.status.should.be.a('string');
          res.body.status.should.equal('success');
          res.body.data.should.be.a('array');
          res.body.data[0].should.be.a('object');
          res.body.data[0].should.have.property('id');
          res.body.data[0].should.have.property('name');
          res.body.data[0].should.have.property('size');
          res.body.data[0].should.have.property('price');
          res.body.data[0].id.should.be.a('number');
          res.body.data[0].name.should.be.a('string');
          res.body.data[0].size.should.be.a('string');
          res.body.data[0].price.should.be.a('string');
          done();
        });
    });
  });

  // Test to get single meal record
  describe('GET /api/v1/meals/:id', () => {
    it('should get a single meal record', (done) => {
      const id = 1;
      chai.request(app)
        .get(`/api/v1/meals/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          res.body.status.should.be.a('string');
          res.body.status.should.equal('success');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('id');
          res.body.data.should.have.property('name');
          res.body.data.should.have.property('size');
          res.body.data.should.have.property('price');
          res.body.data.id.should.be.a('number');
          res.body.data.name.should.be.a('string');
          res.body.data.size.should.be.a('string');
          res.body.data.price.should.be.a('string');
          done();
        });
    });
    // no meal data with id 1000
    it('should not get a single meal record for invalid id', (done) => {
      const id = 1000;
      chai.request(app)
        .get(`/api/v1/meals/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.status.should.equal('Not Found');
          done();
        });
    });
  });
});
