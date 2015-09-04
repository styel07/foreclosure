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
      this.missPayment();
    }
    account.balance -= amount;
  };

  loan.getMonthlyPayment = function() {
    return account.monthlyPayment;
  };

  loan.isForeclosed = function() {
    return account.foreclosed;
  };

  loan.missPayment = function() {
    account.defaulted++;
    if (account.defaulted >= account.defaultsToForeclose) {
      account.foreclosed = true;
    }
  };
  return loan;
}

function borrower(loan) {
  var borrower = {};
  var account = {
    monthlyIncome : 1350,
    funds : 2800,
    loan : loan
  };

  borrower.getFunds = function() {
    return account.funds;
  };

  borrower.makePayment = function() {
    if (account.funds >= loan.getMonthlyPayment()) {
      account.funds -= loan.getMonthlyPayment();
      loan.receivePayment(account);
    } else {
      loan.receivePayment(account.funds);
      account.funds = 0;
    }
  };

  borrower.payDay = function() {
    account.funds += account.monthlyIncome;
  };

  return borrower;
}

stevesLoan = loan();
steve = borrower(stevesLoan);

while (!stevesLoan.isForeclosed()) {
  steve.payDay();
  steve.makePayment();
  month++;
  monthsUntilEvicted = month;
}

