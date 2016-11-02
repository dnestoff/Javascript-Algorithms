function factorial(n) {
  var product = n
  if(n <= 1) {
    return 1
  } else {
    for(var i = (n-1); i > 1; i--) {
      product *= i;
    }
  }
  return product;
}
