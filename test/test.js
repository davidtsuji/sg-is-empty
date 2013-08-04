var assert = require('assert')
  , isEmpty = require('sg-is-empty')

describe('sg-is-empty test', function(){

	it('should check if a set of values is empty', function(_done){

		assert(isEmpty(null) === true);
		assert(isEmpty(undefined) === true);
		assert(isEmpty() === true);
		assert(isEmpty({}) === true);
		assert(isEmpty(false) === true);
		assert(isEmpty(!true) === true);
		assert(isEmpty(0) === true);
		assert(isEmpty(-1) === true);
		assert(isEmpty([]) === true);

		_done();

	});

	it('should check if a set of sus values is NOT empty', function(_done){

		assert(isEmpty('null') === false);
		assert(isEmpty(true) === false);
		assert(isEmpty([false]) === false);
		assert(isEmpty(-2) === false);
		assert(isEmpty(0.1) === false);

		_done();

	});

	it('should check if a set of populated values that have been emptied are empty', function(_done){

		var myArray = [1]
		  , myObject = {a:'a',b:'b',c:{d:'d', e:'e'}}
		  , myBoolean = true
		  , myNumber = 1
		  , myUndefined = 'bam'

		myArray.shift();

		delete myObject['a']
		delete myObject['b']
		delete myObject['c']

		myBoolean = false;

		myNumber--;

		myUndefined = myUndefined.replace(/./g, '');

		assert(isEmpty(myArray) === true);
		assert(isEmpty(myObject) === true);
		assert(isEmpty(myBoolean) === true);
		assert(isEmpty(myNumber) === true);
		assert(isEmpty(myUndefined) === true);

		_done();

	});

})