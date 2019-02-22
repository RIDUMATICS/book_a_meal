/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

process.env.NODE_ENV = 'test';

describe('Orders', () => {
  // Test to get all orders recorp
  describe('GET /api/v1/orders', () => {
    it('should gett all orders record', (done) => {
      chai.request(app)
        .get('/api/v1/orders')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          res.body.status.should.be.a('string').eql('success');
          res.body.data.should.be.a('array');
          res.body.data[0].should.be.a('object');
          res.body.data[0].should.have.property('id');
          res.body.data[0].should.have.property('userId');
          res.body.data[0].should.have.property('menuId');
          res.body.data[0].should.have.property('status');
          res.body.data[0].should.have.property('quantity');
          res.body.data[0].should.have.property('price');
          res.body.data[0].id.should.be.a('number');
          res.body.data[0].userId.should.be.a('number');
          res.body.data[0].menuId.should.be.a('number');
          res.body.data[0].status.should.be.a('string');
          res.body.data[0].quantity.should.be.a('number');
          res.body.data[0].price.should.be.a('number');
          done();
        });
    });
  });

  describe('POST /api/v1/orders', () => {
    it('should add a single order on post', (done) => {
      const order = {
        userId: 4,
        menuId: 4,
        status: 'pending',
        quantity: 4,
        price: 4000,
      };

      chai.request(app)
        .post('/api/v1/orders')
        .send(order)
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status').eql('success');
          res.body.should.have.property('data');
          res.body.status.should.be.a('string');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('id');
          res.body.data.should.have.property('userId').eql(order.userId);
          res.body.data.should.have.property('menuId').eql(order.menuId);
          res.body.data.should.have.property('status').eql(order.status);
          res.body.data.should.have.property('quantity').eql(order.quantity);
          res.body.data.should.have.property('price').eql(order.price);
          done();
        });
    });
  });
});
