//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  s = s.toLowerCase().split("");

  return s
    .map((element, index) => {
      let temp = element.repeat(index + 1);
      temp = temp.charAt(0).toUpperCase() + temp.slice(1);
      return temp;
    })
    .join("-");
}

accum("abcd"); //-> "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt"); //-> "C-Ww-Aaa-Tttt"
