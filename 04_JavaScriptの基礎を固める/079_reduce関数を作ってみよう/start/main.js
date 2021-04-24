const str = "animation";
const strArry = str.split("");

function tag(accu, curr) {
  console.log(accu, curr);
  return `${accu}<${curr}>`;
}

function reduce(arry, callback, defaultValue) {
  let accu = defaultValue;

  for (key in arry) {
    let curr = arry[key];
    accu = callback(accu, curr);
  }

  return accu;
}

const result = reduce(strArry, tag, "");
console.log(result);
