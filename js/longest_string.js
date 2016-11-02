function longestString(strings) {
  var longest = strings[0]
  if(strings.length === 0) {
    return null;
  } else if(strings.length === 1) {
    return strings[0];
  } else {
    for(var i = 0; i < strings.length; i++) {
      if(strings[i].length > longest.length) {
        longest = strings[i];
      }
    }
  }
  return longest;
}
