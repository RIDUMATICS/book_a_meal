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


describe('Menus', () => {
  // Test to post sigle menu record
  describe('POST /api/v1/menus', () => {
    it('should add a single menu on post', (done) => {
      chai.request(app)
        .post('/api/v1/menus')
        .set('Authorization', resToken)
        .send({ mealId: 2, section: 'dinner' })
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('resMenu');
          res.body.status.should.be.a('string');
          res.body.status.should.equal('success');
          res.body.resMenu.should.be.a('object');
          res.body.resMenu.should.have.property('id');
          res.body.resMenu.should.have.property('mealId');
          res.body.resMenu.should.have.property('userId');
          res.body.resMenu.should.have.property('section');
          res.body.resMenu.id.should.be.a('number');
          res.body.resMenu.mealId.should.be.a('number');
          res.body.resMenu.userId.should.be.a('number');
          res.body.resMenu.section.should.be.a('string');
          res.body.resMenu.mealId.should.equal(2);
          res.body.resMenu.section.should.equal('dinner');
          done();
        });
    });
  });
  // Test to get all menu record
  describe('GET /api/v1/menus', () => {
    it('should get all menus record', (done) => {
      chai.request(app)
        .get('/api/v1/menus')
        .set('Authorization', resToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('respMenus');
          res.body.status.should.be.a('string');
          res.body.status.should.equal('success');
          res.body.respMenus.should.be.a('array');
          done();
        });
    });
  });

  // Test to get all menus record for specific caterer
  describe('GET /api/v1/menus/:catererId', () => {
    it('should get all menus record for specific caterer', (done) => {
      chai.request(app)
        .get(`/api/v1/menus/${catererId}`)
        .set('Authorization', resToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('respMenus');
          res.body.status.should.be.a('string');
          res.body.status.should.equal('success');
          res.body.respMenus.should.be.a('array');
          done();
        });
    });
  });
});
