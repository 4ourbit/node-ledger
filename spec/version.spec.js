var ledger = require('../lib/ledger'),
  Ledger = ledger.Ledger;

describe('Ledger', function() {
  it("should return installed ledger-cli version", function(done) {
    new Ledger().version(function(version) {
      expect(version).toBe('3.0.0-20120518');
      done();
    });
  });
});

// it("should respond with hello world", function(done) {
//   request("http://localhost:3000/hello", function(error, response, body){
//     expect(body).toEqual("hello world");
//     done();
//   });
// });