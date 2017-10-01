const math = require('../math'),
   assert = require('assert');

describe('add(a, b)', function() {
    var test = {
        args: [1, 2],
        expected: 3
    };

  it('Correctly adds 2 numbers', function() {
    var res = math.add(test.args[0], test.args[1]);
    assert.equal(res, test.expected);
  })

});