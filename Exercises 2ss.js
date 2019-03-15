function fpb(angka1, angka2) {
  // you can only write your code here!

  var i = 1;
  var output1 = [];
  var output2 = [];
  var result1 = [];
  while (i < angka1) {
    if (angka1 % i == 0) {
      output1.push(i);
    }
    i++;
  }
  var j = 1;
  while (j < angka2) {
    if (angka2 % j == 0) {
      output2.push(j);
    }
    j++;
  }
  var k = 0;
  var l1 = output1.length;
  var l2 = output2.length;
  while (k < l1 || k < l2) {
    var l = 0;
    while (l < l1 || l < l2) {
      if (output1[k] === output2[l]) {
        result1.push(output1[k]);
      }
      l++;
    }
    k++;
  }

  var result2 = [];
  result2.push(result1[result1.length - 1]);
  return Number(result2);
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
