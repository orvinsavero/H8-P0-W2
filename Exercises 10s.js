function perkalianUnik(arr) {
    // you can only write your code here!
    var i = 0;
    var output = 1;
    var l = arr.length;
    var result = [];
    var result2 = [];
    var result3 = [];
    while (i < l){
        var j = 0;
        while (j < l){
        if (result.length == l){
            break;
        }
        output = output * arr[j];
        result.push(output);
        j++
        }
        result2 = output / arr[i];
        result3.push(result2);
        i++
    }
    return result3;
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]