const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect

chai.use(chaiHttp)

const url = 'http://localhost:3000'

describe('Suite api testing', () => {
  it('should be Hello World', (done) => {
    chai.request(url)
    .get('/')
    .end((err, res)=> {
      console.log('A')
      chai.assert.equal(res.text,'Hello world')
      done()
    })
    console.log('B')
  })
})


describe('Should insert name & price', () =>{
  it('Expect name and price', (done) =>{
    chai.request(url)
    .post('/api/v1/products')
    .send({
      name:'Monitor',
      price: 2000
    })
    .end((err, res) =>{
      console.log(res.body)
      expect(res).to.have.status(200)
      done()
    })
  })
})
