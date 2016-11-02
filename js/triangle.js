function validTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  } else if ((c < a+b) && (b < c+a) && (a<c+b)) {
    return true;
  } else {
    return false;
  }
}
