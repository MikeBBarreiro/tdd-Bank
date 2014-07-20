/* global describe, it*/
'use strict';

var expect = require('chai').expect;
var Account = require('../../app/models/account');

describe('Account', function(){
  describe('constructor', function(){
    it('Should create a new account', function(){
    var sara = new Account(3, 'Sara', 1500, 'Savings');
    expect(sara).to.be.instanceof(Account);
    expect(sara.number).to.be.equal(3);
    expect(sara.name).to.equal('Sara');
    expect(sara.type).to.equal('Savings');
    expect(sara.balance).to.equal(1500);
    expect(sara.deposits).to.have.length(0);
    expect(sara.withdrawls).to.have.length(0);

    });
  });
  describe('#desposit', function(){
    it('Should deposite money in account', function(){
      var sara = new Account(3, 'Sara', 1500, 'Saving');
        sara.deposit(5000);
        expect(sara.balance).to.equal(6500);
    });
  });
  
  describe('#withdrawl', function(){
    it('Should withdrawl money from an account', function(){
      var sara = new Account(3, 'Sara', 6500, 'Savings');
        sara.withdrawl(3000);
        expect(sara.balance).to.equal(3500);
    });
  });

  describe('#balance', function(){
    it('Should charge 50 if balance reaches 0', function(){
      var sara = new Account(3, 'Sara', 6500, 'Savings');
      sara.withdrawl(7000);
      expect(sara.balance).to.equal(-550);
    });
  });

  describe('#suspend', function(){
    it('Should suspend account', function(){
      var sara = new Account(3, 'Sara', 6500, 'Savings');
        sara.withdrawl(10000);
        sara.withdrawl(10000);
        sara.withdrawl(10000);
        expect(sara.balance).to.equal(-23650);
        expect(sara.active).to.equal(false);
    });
  }); 
  describe('#money', function(){
    it('Should tell total ammount of money put towards this account', function(){
      var sara = new Account(3, 'Sara', 6500, 'Savings');
      expect(sara.money).to.equal(6500);
    });
  });
});
