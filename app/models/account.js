'use strict';

function Account(number, name, deposit, type){
  this.number = number;
  this.name = name;
  this.type = type;
  this.balance = deposit;
  this.deposits = [];
  this.withdrawls = [];
  this.fees = 0;
  this.active = true;
}

Account.prototype.deposit = function(amount){
  this.balance += amount;
  this.deposits.push(amount);
};

Account.prototype.withdrawl = function(amount){
  this.balance -= amount;
  this.withdrawls.push(amount);
  if(this.balance < 0){
    this.balance -= 50;
    this.fees++;
    if (this.fees === 2) {
      this.active = false;
    }
  }
};

module.exports = Account;
