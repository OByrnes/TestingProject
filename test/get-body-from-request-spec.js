const EventEmitter = require('events');
const { expect } = require('chai');
const { getBodyFromRequest } = require('../get-body-from-request');
describe("The getBodyFromRequest function", () => {
  let fakeReq = null;

  beforeEach(() => {
    fakeReq = new EventEmitter();
  });

  it('returns an empty string for no body', done => {
    const bodyPromise = getBodyFromRequest(fakeReq);
    fakeReq.emit('end');
    bodyPromise
      .then(body => {
        if (body === ''){
          done();
        } else {
          done(`Failed got ${body}`);
        
        } 
      })
  });

  it('returns the data read from the stream', done => {
    const bodyPromise = getBodyFromRequest(fakeReq)
    const data1 = 'this is DUMB'
    const data2 = 'I am tired'
    fakeReq.emit('data',data1)
    fakeReq.emit('data',data2)
    fakeReq.emit('end')
    bodyPromise
      .then(body => {
        if (body === data1+ data2){
          done()
        }else{
          done(`failed got ${body}`)
        }
      })
  });
});
