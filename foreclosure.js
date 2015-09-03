'use strict';
var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

function loan() {
  var loan = {};
  var account = 0;
  var borrowed = 550000;
  var balance = 286000;
  var monthlyPayment = 1700;
  var defaulted = 0;
  var defaultsToForeclose = 5;
  var foreclosed = false;

  loan.getBalance = function() {
    return balance;
  };

  loan.receivePayment = function() {
    return missPayment();
  };

  loan.getMonthlyPayment = function() {
    return missPayment();
  };

  loan.isForclosed = function() {
    return monthlyPayment;
  };

  loan.missPayment = function() {
    defaulted++;
  };
  return loan;
};

stevesLoan = loan();



function borrower() {

}