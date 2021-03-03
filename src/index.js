
exports.min = function min (array) {

    let minNumberArray = Math.min.apply(null, array);

    if (array == undefined || array == 0) {
        return 0;
    }
  return minNumberArray;
}

exports.max = function max (array) {

    let maxNumberArray = Math.max.apply(null, array);

    if (array == undefined || array == 0) {
        return 0;
    }
    return maxNumberArray;
}

exports.avg = function avg (array) {

    let num = 0;

    if (array == undefined || array == 0) {
        return 0;
    }

    for (let i = 0; i < array.length; i++) {
        num += array[i];
    }

    let averageArray = num / array.length;

    return averageArray;
}
