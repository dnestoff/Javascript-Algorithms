function pad(array, minSize, value) {
  var paddedArray = [];
  for (i in array) { paddedArray.push(array[i])};
  if (paddedArray.length < minSize) {
    for(var i = paddedArray.length; i < minSize ; i++) {
      if (value) {
        paddedArray.push(value);
      } else {
        paddedArray.push(null);
      }
    }
  }
    return paddedArray;
};
