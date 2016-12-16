function sum1 () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

function sum2 (...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++){
    sum += args[i];
  }
  return sum;
}

Function.prototype.myBind = function(context, ...bindArgs) {
  return (...callArgs) => {
    this.apply(context, bindArgs.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
const boundMarkov = markov.says.myBind(breakfast, "meow")("Kush");

function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((a,b) => a + b );
    }
    else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

console.log(curriedSum(2)(5));


Function.prototype.curry = function(numArgs) {
  let args = [];
  let that = this;

  function _curried(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply(null, args);
    } else {
      return _curried;
    }
  }

  return _curried;
};

Function.prototype.curry2 = function(numArgs) {
  let args = [];
  let that = this;

  function _curried(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that(...args);
    } else {
      return _curried;
    }
  }

  return _curried;
};

function sum(a1, a2, a3) {
  return a1 + a2 + a3;
}

console.log(sum(1,4,5));
let cSum = sum.curry(3);
console.log(cSum(3));
console.log(cSum(5));
console.log(cSum(8));
