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
let catererId;
let orderId;


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
        catererId = res.body.user.id;
        done();
      });
  });
});

describe('Orders', () => {
  describe('POST /api/v1/orders', () => {
    it('should add a single order on post', (done) => {
      const order = {
        menuId: 4,
        status: 'pending',
        quantity: 4,
        price: 4000,
        orderTime: new Date(),
      };

      chai.request(app)
        .post('/api/v1/orders')
        .set('Authorization', resToken)
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
          res.body.data.should.have.property('userId').eql(catererId);
          res.body.data.should.have.property('menuId').eql(order.menuId);
          res.body.data.should.have.property('status').eql(order.status);
          res.body.data.should.have.property('quantity').eql(order.quantity);
          res.body.data.should.have.property('price').eql(order.price);
          orderId = res.body.data.id;
          done();
        });
    });
  });
  // Test to get all orders recorp
  describe('GET /api/v1/orders', () => {
    it('should gett all orders record', (done) => {
      chai.request(app)
        .get('/api/v1/orders')
        .set('Authorization', resToken)
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

  describe('PUT /api/v1/orders/:id', () => {
    it('should edit a single order on put', (done) => {
      const data = { status: 'pending', quantity: 5 };
      chai.request(app)
        .put(`/api/v1/orders/${orderId}`)
        .set('Authorization', resToken)
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status').eql(200);
          res.body.should.have.property('data');
          res.body.status.should.be.a('number');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('id').eql(orderId);
          res.body.data.should.have.property('userId');
          res.body.data.should.have.property('menuId');
          res.body.data.should.have.property('status').eql('pending');
          res.body.data.should.have.property('quantity').eql(5);
          res.body.data.should.have.property('price');
          res.body.data.id.should.be.a('number');
          res.body.data.userId.should.be.a('number');
          res.body.data.menuId.should.be.a('number');
          res.body.data.status.should.be.a('string');
          res.body.data.quantity.should.be.a('number');
          res.body.data.price.should.be.a('number');
          done();
        });
    });

    it('should not edit a order with invalid id', (done) => {
      const id = 1000; // no order with id 1000
      const data = { status: 'pending', quantity: 5 };
      chai.request(app)
        .put(`/api/v1/orders/${id}`)
        .set('Authorization', resToken)
        .send(data)
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
  });
});
