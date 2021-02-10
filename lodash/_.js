// html link for lodash library
// <head>
//   <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js"></script>
//   </head>

const _ = {
  // documentation https://lodash.com/docs/4.17.15#clamp
  // diagram https://content.codecademy.com/programs/programming-with-javascript/lodash-assets/clamp.svg
  clamp(number, lower, upper) {
    var lowerClampValue = Math.max(number, lower);
    var clampedValue = Math.min(lowerClampValue, upper);
    return clampedValue;
  },
  // documentation https://lodash.com/docs/4.17.15#inRange
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = start <= number && number < end;

    return isInRange;
  },
  //   documentation https://lodash.com/docs/4.17.15#words
  //   documentation on split https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  words(string) {
    let words = string.split(" ");
    return words;
  },
  //   documentation https://lodash.com/docs/4.17.15#pad
  // diagram https://content.codecademy.com/programs/programming-with-javascript/lodash-assets/pad.svg
  pad(string, length) {
    if (length < string.length) {
      //     if (string.length >= length) {
      return string;
    }
    const startPaddingLength = Math.floor((length - string.length) / 2);

    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString =
      " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
    return paddedString;
  },
  // documentation  https://lodash.com/docs/4.17.15#has
  has(object, key) {
    let hasValue = object[key];
    if (hasValue != undefined) {
      return true;
    }
    return false;
  },
  //   documentation https://lodash.com/docs/4.17.15#invert
  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      const originalValue = object[key];
      invertedObject = { originalValue: key };
    }
    return invertedObject;
  },
  //   https://lodash.com/docs/4.17.15#findKey
  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
      undefined;
      return undefined;
    }
  },
  //   documentation https://lodash.com/docs/4.17.15#drop
  drop(array, n) {
    if (n === undefined) {
      n = 1;
    }
    const droppedArray = array.slice(n, array.length);
    return droppedArray;
  },

  //   documentation https://lodash.com/docs/4.17.15#dropWhile
  dropWhile(array, predicate) {
    const callbackFunction = (element, index) => {
      return !predicate(element, index, array);
    };
    let dropNumber = array.findIndex(callbackFunction);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  //   You can see a diagram demonstrating this functionality here.
  // https://lodash.com/docs/4.17.15#chunk
  //   https://content.codecademy.com/programs/programming-with-javascript/lodash-assets/chunk.svg
  chunk(array, size) {
    if (size === undefined) {
      size = 1;
    }
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },
};

// Do not write or modify code below this line.
module.exports = _;
