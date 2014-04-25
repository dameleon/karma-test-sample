'use strict';

var assert = require('power-assert');

describe('Sample Test', function() {


    it('should be One', function() {
        assert(1 === 0);
    });

    describe('DOM Test', function() {
        before(function() {
            var fixtureContainer = document.createElement('div');

            fixtureContainer.id = 'fixture-container';
            // karma-html2js-preprocessor で html2js すると global.__html__.{filepath} のように html の中身が String で入っている
            fixtureContainer.innerHTML = __html__['test/fixtures/mock.html'];
            document.body.appendChild(fixtureContainer);
        });
            it('is ', function() {

    });
    });


});
