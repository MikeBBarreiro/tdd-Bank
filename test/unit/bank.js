/* global describe, it*/
'use strict';
var expect = require('chai').expect;
var Bank = require('../../app/models/bank');





describe('Bank', function(){
  describe('constructor', function(){
    it('Should create a new bank', function(){
    var boa = new Bank('Bank of America');
    expect(boa).to.be.instanceof(Bank);
    expect(boa.name).to.be.equal('Bank of America');
    expect(boa.account).to.have.length(0);
    });
  });
});
