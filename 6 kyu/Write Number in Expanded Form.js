//https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
  numArr = [...String(num)];

  let a = numArr.map((element, index) => {
    let regex = /[1-9]/g;
    if (regex.exec(element))
      return element + "0".repeat(numArr.length - index - 1);
  });

  filter = a.filter((item) => item);
  return a.join(" + ");
}

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
