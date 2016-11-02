var rectOne   = {width: 10, height: 20};
var rectTwo   = {width: 32, height: 13};
var rectThree = {width: 20, height: 10};

function equal(rect1, rect2) {
  return ( (rect1.width  == rect2.width && rect1.height == rect2.height ) ||
           (rect1.height == rect2.width && rect1.width  == rect2.height ) );
};

var area = function(rectangle) {
  return (rectangle.width * rectangle.height);
}

var perimeter = function(rectangle) {
  return ((rectangle.width * 2) + (rectangle.height * 2));
}

var diagonal = function(rectangle) {
  return Math.sqrt((rectangle.width ** 2) + (rectangle.height ** 2))
}

var isSquare = function(rectangle) {
  if(rectangle.height === rectangle.width) {
    return true;
  } else {
    return false;
  }
}
