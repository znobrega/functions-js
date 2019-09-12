Array.prototype.filter = function(predicate) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i])) result.push(this[i]);
  }

  return result;
};

Array.prototype.filterClean = function(predicate) {
  const result = [];

  for (item of this) predicate(item) && result.push(item);

  return result;
};
