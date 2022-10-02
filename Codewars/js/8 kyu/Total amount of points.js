//https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(games) {
  let a = games.map((element) => {
    let calc = eval(element.replace(":", "-"));
    if (calc > 0) {
      return 3;
    } else if (calc == 0) {
      return 1;
    } else {
      return 0;
    }
  });
  return a.reduce((a, b) => a + b, 0);
}

const points = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

data = ["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"];
data2 = ["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"];
console.log(points(data));
console.log(points(data2));
