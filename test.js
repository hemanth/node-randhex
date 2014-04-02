var assert = require('assert')
,hexrand = require('./index');

assert.equal(hexrand().length,6);
assert.equal(hexrand(7).length,7);
assert.equal(hexrand(-1).length,0);
assert.equal(hexrand('a'),"");


