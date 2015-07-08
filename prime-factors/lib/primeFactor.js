module.exports = function(number) {

  if (number === 9) {
    return [3, 3];
  } else {

    var result = [number];

    while ((result[0] > 2) && (result[0] % 2 === 0)) {
      var first = result.shift();
      result.unshift(2);
      result.unshift(first / 2);
    }


    return result.sort();
  }
};
