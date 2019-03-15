function targetTerdekat(arr) {
    // you can only write your code here!
    var i = 0;
    var l = arr.length;
    var result = 0;
    var output = 0;
    var count = null;
    while(i < l){
        if (arr[i] === 'x' && count == null){
            result = i;
        }
        else if (arr[i] == 'o'){
            count = count + i; 
        }
        else if (arr[i] === 'x' && result == 0){
            result = i;
        }
    i++
    }
    if (result != 0){
    output = result - count;}
    if (result == 0){
        output = 0;
    }
    return Math.abs(output);
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2