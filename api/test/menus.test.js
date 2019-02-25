/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

process.env.NODE_ENV = 'test';

describe('Menus', () => {
  // Test to get all menu record
  describe('GET /api/v1/menus', () => {
    it('should get all menus record', (done) => {
      chai.request(app)
        .get('/api/v1/menus')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('menus');
          res.body.status.should.be.a('string');
          res.body.status.should.equal('success');
          res.body.menus.should.be.a('array');
          res.body.menus[0].should.have.property('id');
          res.body.menus[0].should.have.property('mealId');
          res.body.menus[0].should.have.property('date');
          res.body.menus[0].should.have.property('section');
          res.body.menus[0].id.should.be.a('number');
          res.body.menus[0].mealId.should.be.a('number');
          res.body.menus[0].date.should.be.a('string');
          res.body.menus[0].section.should.be.a('string');
          done();
        });
    });
  });

  // Test to post sigle menu record
  describe('POST /api/v1/menus', () => {
    it('should add a single menu on post', (done) => {
      chai.request(app)
        .post('/api/v1/menus')
        .send({ mealId: 2, date: '2-22-2019', section: 'dinner' })
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('menu');
          res.body.status.should.be.a('string');
          res.body.status.should.equal('success');
          res.body.menu.should.be.a('object');
          res.body.menu.should.have.property('id');
          res.body.menu.should.have.property('mealId');
          res.body.menu.should.have.property('date');
          res.body.menu.should.have.property('section');
          res.body.menu.id.should.be.a('number');
          res.body.menu.mealId.should.be.a('number');
          res.body.menu.date.should.be.a('string');
          res.body.menu.section.should.be.a('string');
          res.body.menu.mealId.should.equal(2);
          res.body.menu.date.should.equal('2-22-2019');
          res.body.menu.section.should.equal('dinner');
          done();
        });
    });
  });

  // Test to get menu record for sepecific date
  // correct section option [breafast, lunch, dinner]
  describe('GET /api/v1/menus/:section?date=value', () => {
    it('should get menu for specific date', (done) => {
      chai.request(app)
        .get('/api/v1/menus/breakfast?date=2-22-2019')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('menus');
          res.body.status.should.be.a('string');
          res.body.status.should.equal('success');
          res.body.menus.should.be.a('array');
          res.body.menus[0].should.have.property('id');
          res.body.menus[0].should.have.property('mealId');
          res.body.menus[0].should.have.property('date');
          res.body.menus[0].should.have.property('section');
          res.body.menus[0].id.should.be.a('number');
          res.body.menus[0].mealId.should.be.a('number');
          res.body.menus[0].date.should.be.a('string');
          res.body.menus[0].section.should.be.a('string');
          res.body.menus[0].date.should.equal('2-22-2019');
          res.body.menus[0].section.should.equal('breakfast');
          done();
        });
    });

    // Test for invalid date
    it('should not get menu for invalid date', (done) => {
      chai.request(app)
        // Test for invalid date
        .get('/api/v1/menus/breakfast?date=2-22-2022')
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });

    // Test for invalid section
    // correct section option [breafast, lunch, dinner]
    it('should not get menu for invalid section', (done) => {
      chai.request(app)
        // Test for invalid section
        .get('/api/v1/menus/break?date=2-22-2019') // Invalid section : break
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
