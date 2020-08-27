// Math.random() * (max - min) + min;

function genNumeri(max, min) {
  var numCasuale = Math.floor(Math.random() * (max - min) + min);
  return numCasuale;
}

for (var i = 0; i < 10; i++) {
  var numRange = genNumeri(100, 1);
  console.log(numRange);
}
