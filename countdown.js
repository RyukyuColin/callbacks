var countdownGenerator = function (x) {
  /* your code here */
  var countdown = x;

  return function() {
    if(countdown < 0){
      console.log("Rockets already gone, bub!");
    }
    if(countdown === 0){
        console.log("Blast Off!")
    }
    if(countdown > 0){
        console.log("T-minus " + countdown);
    }
    countdown--
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!