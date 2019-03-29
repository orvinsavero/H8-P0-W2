function groupAnimals(animals) {
    // you can only write your code here!
var baru = [];
 var arrsort = animals.sort();

 for(i=0;i<arrsort.length;i++){

 var found = false;

     for(var j = 0; j<baru.length;j++){

         if(arrsort[i][0]===baru[j][0][0]){

             baru[j].push(arrsort[i]);

             found = true;
         }
     }
         if(found===false){
             baru.push([arrsort[i]]);
     }
 }
 return baru;
  }
  
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]