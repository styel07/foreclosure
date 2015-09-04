'use strict';
var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

function loan() {
  var loan = {};
  var account = {
    borrowed : 550000,
    balance : 286000,
    monthlyPayment : 1700,
    defaulted : 0,
    defaultsToForeclose : 5,
    foreclosed : false
  };

  loan.getBalance = function() {
    return account.balance;
  };

  loan.receivePayment = function(amount) {
    if (amount < account.monthlyPayment) {
      missPayment();
    }
    account.balance -= amount;
  };

  loan.getMonthlyPayment = function() {
    return missPayment();
  };

  loan.isForeclosed = function() {
    return monthlyPayment;
  };

  loan.missPayment = function() {
    account.defaulted++;
    if (account.defaulted >= account.defaultsToForeclose) {
      account.foreclosed = true;
    }
  };
  return loan;
};

stevesLoan = loan();



function borrower() {

}