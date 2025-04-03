let charMap = mapStringToObject("abcd");
for (let key in charMap) {
  console.log(key + ": " + charMap[key]);
}

function mapStringToObject(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    result[i+1] = str[i];
  }
  return result;
}

let n=121
n=n.to