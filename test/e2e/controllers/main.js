'use strict';

describe('Controller: MainCtrl', function () {
	var ptor = protractor.getInstance();
	it('show the welcome page', function () {
		browser.get('http://localhost:9001');
		ptor.findElements(protractor.By.css('input')).then(function(elems) {
		  expect(elems.length).toBe(2);
		});
	});
});


