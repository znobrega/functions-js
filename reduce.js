Array.prototype.reduce = function(func, initialValue) {
  let stored = initialValue;

  for (let element of this) {
    stored = func(stored, element);
  }
  return stored;
};

// Objects
const entities = [{ number: 10 }, { number: 20 }, { number: 30 }];

const sum = (stored, { number }) => stored + number;

const total = entities.reduce(sum, 0);

// Array
const arrays = [[1, 2], [3, 4], [5, 6]];

const concatArray = (stored, current) => [stored.concat(current)];

const c = arrays.reduce(concatArray, []);

// Converting Arrays into Objects

const people = [
  { id: 1, name: "Donald Knuth", born: 1938 },
  { id: 2, name: "Vin Cerf", born: 1943 },
  { id: 3, name: "Hal Abelson", born: 1947 },
  { id: 4, name: "Alan Turing", born: 1912 },
  { id: 5, name: "John von Neumann", born: 1903 },
  { id: 6, name: "Thomas H. Cormen", born: 1956 },
  { id: 7, name: "Peter Norvig", born: 1956 },
  { id: 8, name: "Jon Betley", born: 1953 },
  { id: 9, name: "Grady Booch", born: 1955 },
  { id: 10, name: "Randal Bryant", born: 1952 }
];

const byId = (stored, current) => {
  return { ...stored, [current.id]: current };
};

const peopleById = people.reduce(byId, {});
console.log(peopleById);
