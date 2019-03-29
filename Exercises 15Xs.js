function groupAnimals(animals) {
    // you can only write your code here!
    var count = [];
    var count2 = [];
    var i = 0
    var l = animals.length
    while (i < l){

        
        var j = 0
        var j = i + 1
        while (j < l){
            if (animals[i][0] == animals[j][0]){
                var asd = count.push(animals[i])
                count.push(animals[j])
            } 
            else if (animals[i][0] != count[0][0] && animals[i][0] != count[count.length-1][0]){
                count2 += animals[j]
            }
        j++
        }
    i++
    }
    return count2
  }
  
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]