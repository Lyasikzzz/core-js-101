const qwe = ['a', 'b', 'c'];

function propagateItemsByPositionIndex(arr) {
  const result = [];
  let num = 1;

  // eslint-disable-next-line func-names
  const pushing = function (elem, array, count) {
    if (num < count) {
      array.push(elem);
      num += 1;
      pushing(elem, array, count);
    } else {
      num = 0;
    }
  };

  // eslint-disable-next-line array-callback-return
  arr.map((e) => {
    pushing(e, result, arr.indexOf(e) + 1);
  });


  return result;
}

console.log(propagateItemsByPositionIndex(qwe));
