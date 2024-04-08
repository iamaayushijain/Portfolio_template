'use strict';

module.exports = rotate;
function rotate(array, num) {
    num = (num || 0) % array.length;
    if (num < 0) {
        num += array.length;
    }
    var removed = array.splice(0, num);
    array.push.apply(array, removed);
    return array;
}

module.exports.all = all;
function all(array) {
    var clone = array.slice();
    var rotations = [];
    var n;
    for (n = 0; n < clone.length; n++) {
        rotations.push(clone.slice());
        rotate(clone, 1);
    }
    return rotations;
}
