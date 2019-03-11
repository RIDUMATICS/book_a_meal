/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

process.env.NODE_ENV = 'test';

const login = {
  email: 'ridwanonikoyi@yahoo.com',
  password: 'ridwan',
};

let resToken;
let newMealId;


describe('#POST / user login', () => {
  it('should login a user', (done) => {
    chai.request(app)
      .post('/auth/login')
      .send(login)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('code').eql(200);
        res.body.should.have.property('message').eql('User loggedin successfully');
        res.body.should.have.property('user').should.be.a('object');
        res.body.should.have.property('token');
        resToken = res.body.token;
        done();
      });
  });
});

describe('Meals', () => {
  // Test to get all meals record
  describe('GET /api/v1/meals', () => {
    it('should get all meals record', (done) => {
      chai.request(app)
        // Test to get all meals record
        .get('/api/v1/meals')
        .set('Authorization', resToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          res.body.status.should.be.a('string');
          res.body.status.should.equal('success');
          res.body.data.should.be.a('array');
          done();
        });
    });
  });
  // Test to post a meal
  describe('POST /api/v1/meals', () => {
    it('should add a single meal on post', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
        .set('Authorization', resToken)
        .send({
          name: 'Garri', size: 'Large', price: 200, userId: 7,
        })
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
          res.body.data.should.have.property('userId');
          res.body.data.id.should.be.a('number');
          res.body.data.name.should.be.a('string');
          res.body.data.size.should.be.a('string');
          res.body.data.price.should.be.a('number');
          res.body.data.userId.should.be.a('number');
          newMealId = res.body.data.id;
          done();
        });
    });
  });

  describe('PUT /api/v1/meals/:id', () => {
    it('should edit a single meal on put', (done) => {
      chai.request(app)
        .put(`/api/v1/meals/${newMealId}`)
        .set('Authorization', resToken)
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
          res.body.data.should.have.property('userId');
          res.body.data.should.have.property('createdAt');
          res.body.data.should.have.property('updatedAt');
          res.body.data.id.should.be.a('number');
          res.body.data.name.should.be.a('string');
          res.body.data.size.should.be.a('string');
          res.body.data.price.should.be.a('number');
          res.body.data.id.should.equal(newMealId);
          res.body.data.name.should.equal('Indomie');
          done();
        });
    });

    it('should not edit a meal with invalid id', (done) => {
      const id = 1000; // no meal with id 1000
      chai.request(app)
        .put(`/api/v1/meals/${id}`)
        .set('Authorization', resToken)
        .send({ name: 'Pap' })
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
  });

  describe('DELETE /api/v1/meals/:id', () => {
    it('should delete an meal on delete', (done) => {
      chai.request(app)
        .delete(`/api/v1/meals/${newMealId}`)
        .set('Authorization', resToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('message');
          res.body.status.should.be.a('number').eql(200);
          res.body.message.should.be.a('string').eql('deleted');
          done();
        });
    });

    it('should not delete a meal with invalid id', (done) => {
      const id = 1000; // no meal with id 1000
      chai.request(app)
        .delete(`/api/v1/meals/${id}`)
        .set('Authorization', resToken)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
