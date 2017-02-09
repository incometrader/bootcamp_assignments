function findMinMax(arr) {
  if (Math.min.apply(null, arr) == Math.max.apply(null, arr)){
    return [Math.min.apply(null, arr)];
  }
  return [Math.min.apply(null, arr), Math.max.apply(null, arr)]
 }

module.exports = findMinMax;