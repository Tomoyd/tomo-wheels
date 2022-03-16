const expect = require('chai').expect;
const add = require('../dist/index').add;

describe('add test', () => {
	it('1+1 should be 2', () => {
		expect(add(1, 1)).to.equal(2);
	});
});
