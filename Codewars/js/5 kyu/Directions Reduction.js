//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(plan) {
  let opposite = { NORTH: "SOUTH", EAST: "WEST", SOUTH: "NORTH", WEST: "EAST" };
  return plan.reduce((dirs, dir) => {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}

//cases
a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
// b ={ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// c = [North, South, South, East, West, North, West];

dirReduc(a);
