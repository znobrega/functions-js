Array.prototype.reduce = function(func) {
  let stored;

  for (let element of this) stored = func(stored, element);

  return stored;
};

// Objects
const entities = [{ number: 10 }, { number: 20 }, { number: 30 }];

const sum = (stored, { number }) => stored + number;

const total = entities.reduce(sum, 0);

// Array
const arrays = [[1, 2], [3, 4], [5, 6]];

const concatArray = (stored, array) => [...stored, ...array];

total = arrays.reduce(concatArray, []);
