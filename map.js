Array.prototype.map = function(mapValue) {
  const result = [];

  for (let value of this) result.push(mapValue(value));

  return result;
};
