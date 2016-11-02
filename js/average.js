function total(numbers) {
  var sum = 0
  for(var i = 0; i < numbers.length; i++ ) {
    sum += numbers[i];
  }
  return sum;
};

function mean(numbers) {
  var sum = 0
  for(var i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return (sum / numbers.length);
};

function median(numbers) {
  var sortedNumbers = numbers.sort();
  if(sortedNumbers.length % 2 === 0) {
    var middle1 = sortedNumbers[sortedNumbers.length / 2]
    var middle2 = sortedNumbers[(sortedNumbers.length / 2) - 1]
    return (middle1 + middle2) / 2
  } else {
    return sortedNumbers[(sortedNumbers.length - 1) / 2]
  }
};

function mode(numbers) {
  var occurrences = {}
  for (i in numbers) {occurrences[numbers[i].toString()] = 0};
  for (i in numbers) {occurrences[numbers[i].toString()] +=1};
  var keys = []
  for (i in occurrences) {keys.push(occurrences[i])}
  var maxNum = keys[0];
  var maxIndex = 0;
  for (var i = 1; i < keys.length; i++) {
    if (keys[i] > maxNum) {
      maxIndex = i;
      maxNum = keys[i];
    }
  }
  return occurrences.maxIndex;
  // occurrences.sort();
//    return this.bikes.pop();
// }
// };
  // occurrences;
}
