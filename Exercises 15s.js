function groupAnimals(animals) {
    // you can only write your code here!
    var i = 0;
    var check = [];
    var output1 = [];
    var output2 = [];
    var output3 = [];
    var output4 = [];
    var result1 = [];
    var l = animals.length;
    while (i < l){
        if (output1.length == check.length || output1[0][0] == animals[i][0]){
            output1.push(animals[i]);
        } 
        else if (output2.length == check.length || animals[i][0] == output2[0][0]){
            output2.push(animals[i]);
        }
        else if (output3.length == check.length || animals[i][0] == output3[0][0]){
            output3.push(animals[i]);
        }
        else if (output4.length == check.length || animals[i][0] == output4[0][0]){
            output4.push(animals[i]);
        }
    i++
    }
    result1.push(output2);
    result1.push(output1);
    result1.push(output3);
    if (output4.length >= 1){
    result1.push(output4);
    }
    return result1;
  }
  
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]