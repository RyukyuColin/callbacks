function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var storeNumber = 0;
  var increment = 0;
  return function() {
    /* your code here */
    for(var i = increment; i < list.length; i++) {
      increment = i + 1;
      return storeNumber = list[i];
    }
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6