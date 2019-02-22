/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

process.env.NODE_ENV = 'test';

describe('Menus', () => {
  // Test to get all menus record
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
});
