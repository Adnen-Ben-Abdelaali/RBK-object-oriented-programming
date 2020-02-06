/* Object Oriented Programming with javascript */
/*
1. The old bank account example from lecture looked as follows:

 function makeAccount(initial) {
     var balance = initial;
     return {
          withdraw: function(amount) {
               if (balance - amount >= 0) {
                    balance = balance - amount;
                    return 'Here is your money: $' + amount;
               }
          return 'Insufficient funds.';
          },               deposit: function(amount) {
               balance = balance + amount;
               return 'Your balance is: $' + balance;
          }
     };
}
 Refactor the above as an Account class that shares its methods across different 
 instances.
 */
function makeAccount(initial) {
    
    let account = {};
    account.balance = initial;
    account.withdraw = withdraw;
    account.deposit = deposit;

    return account;
}

let withdraw = function(amount) {
  this.balance = this.balance - amount;

  return this.balance;
}

let deposit = function(amount) {
  this.balance = this.balance + amount;

  return this.balance;
}
/*****************************************************************************/
/*
2. Our stopwatch exercise looked like this when complete:

 function makeStopwatch() {
     var stop;
     var time = 0;
     return {
          start: function() {
               stop = setInterval(function() {
               time = time + 1;
               console.log('Elapsed time: ' + time + 's.');
          }, 1000);
     },stop: function() {
               clearInterval(stop);
          },
          reset: function() {
               clearInterval(stop);
               time = 0;
          }
     };
}
As before, refactor the makeStopwatch into a Stopwatch class with shared methods.
*/

