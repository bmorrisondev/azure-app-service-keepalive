const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

it('DefaultPort_ShouldReturnStatus200', function () {
  require('./index').keepalive();
  chai
    .request('http://localhost:8080')
    .get('/')
    .end(function (err, res) {
      expect(res).to.have.status(200);
    });
});

it('Port12345_ShouldReturnStatus200', function () {
  require('./index').keepalive(12345);
  chai
    .request('http://localhost:12345')
    .get('/')
    .end(function (err, res) {
      expect(res).to.have.status(200);
    });
});

it('EnvironmentVariableSet_ShouldReturnStatus200', function () {
  process.env.WEBSITES_PORT = 23456;
  require('./index').keepalive();
  chai
    .request('http://localhost:23456')
    .get('/')
    .end(function (err, res) {
      expect(res).to.have.status(200);
    });
});
