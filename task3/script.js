function flatArray(ary) {
  var subArray = [];
  for (let i = 0; i < ary.length; i++) {
    if (Array.isArray(ary[i])) {
      subArray = subArray.concat(flatArray(ary[i]));
    } else {
      subArray.push(ary[i]);
    }
  }
  return subArray;
}