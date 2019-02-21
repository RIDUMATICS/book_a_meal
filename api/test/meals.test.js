/* eslint-disable no-unused-expressions */
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
          res.should.be.json;
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
          res.body.data.id.should.equal(id);
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
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.status.should.equal('Not Found');
          done();
        });
    });
  });
  // Test to post a meal
  describe('POST /api/v1/meals', () => {
    it('should add a single meal on post', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
        .send({ name: 'Garri', size: 'Large', price: '200' })
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.json;
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
  });

  describe('PUT /api/v1/meals/:id', () => {
    it('should edit a single meal on put', (done) => {
      const id = 1;
      chai.request(app)
        .put(`/api/v1/meals/${id}`)
        .send({ name: 'Indomie' })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          res.body.status.should.be.a('number');
          res.body.status.should.equal(200);
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('id');
          res.body.data.should.have.property('name');
          res.body.data.should.have.property('size');
          res.body.data.should.have.property('price');
          res.body.data.id.should.be.a('number');
          res.body.data.name.should.be.a('string');
          res.body.data.size.should.be.a('string');
          res.body.data.price.should.be.a('string');
          res.body.data.id.should.equal(id);
          res.body.data.name.should.equal('Indomie');
          done();
        });
    });

    it('should not edit a meal with invalid id', (done) => {
      const id = 1000; // no meal with id 1000
      chai.request(app)
        .put(`/api/v1/meals/${id}`)
        .send({ name: 'Pap' })
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
  });

  describe('DELETE /api/v1/meals/:id', () => {
    it('should delete an meal on delete', (done) => {
      const id = 2;
      chai.request(app)
        .delete(`/api/v1/meals/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          res.body.status.should.be.a('number');
          res.body.status.should.equal(200);
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('id');
          res.body.data.should.have.property('name');
          res.body.data.should.have.property('size');
          res.body.data.should.have.property('price');
          res.body.data.id.should.be.a('number');
          res.body.data.name.should.be.a('string');
          res.body.data.size.should.be.a('string');
          res.body.data.price.should.be.a('string');
          res.body.data.id.should.equal(id);
          done();
        });
    });

    it('should not delete a meal with invalid id', (done) => {
      const id = 1000; // no meal with id 1000
      chai.request(app)
        .delete(`/api/v1/meals/${id}`)
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
  });
});
