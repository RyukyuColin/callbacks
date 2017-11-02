var words = ["ground", "control", "to", "major", "tom"];

function map(array, callBack){
  var finalArray = [];
  for(var i = 0; i < array.length; i++) {
    finalArray.push(callBack(array[i]));
  }
  console.log(finalArray);
}

map(words, function(word) {
  return word.length;
  //console.log(word.length);
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

