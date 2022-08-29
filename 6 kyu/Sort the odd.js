//www.codewars.com/kata/578aa45ee9fd15ff4600090d/javascript

function sortArray(array) {
  let i = [];
  let j = [];
  array.forEach((element, index) => {
    if (element % 2) {
      i.push(index), j.push(element);
    }
  });

  j.sort(function (a, b) {
    return a - b;
  });

  i.forEach((_, index) => {
    array.splice(i[index], 1, j[index]);
  });

  return array;
}

//[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

array = [5, 8, 6, 3, 4];
sortArray(array);
