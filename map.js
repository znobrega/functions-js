Array.prototype.map = function(predicate) {
  const result = []

  for (let value of this)
    result.push(predicate(value))

  return result
} 