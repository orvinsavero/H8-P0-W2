
    
function angkaPrima(angka) {
  // you can only write your code here!
  var i = 2;
  while (i < angka){
    if (angka % i === 0){
      return false
    }
    i++
    }
    return angka >1;
  }

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(121)); // false