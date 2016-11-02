function countBetween(array, lowerBound, upperBound) {
  var boundArray = [];
  if(array.length === 0 || lowerBound > upperBound) {
    return 0
  } else if(lowerBound <= upperBound) {
    for(var i = 0; i < array.length; i++) {
      if(array[i] >= lowerBound && array[i] <= upperBound) {
        boundArray.push(array[i]);
      }
    }
  }
  return boundArray.length;
}
