var type = require('type')

module.exports = function(_value) {

	var empty = false;

	if (type(_value) == 'null' || type(_value) == 'undefined') {

		empty = true;

	} else if (type(_value) == 'object') {

		empty = JSON.stringify(_value) == '{}';

	} else if (type(_value) == 'boolean') {

		empty = _value == false;

	} else if (type(_value) == 'number') {

		empty = _value == 0 || _value == -1;

	} else if (type(_value) == 'array' || type(_value) == 'string') {

		empty = _value.length == 0;

	}

	return empty;

}