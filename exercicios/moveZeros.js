var moveZeros = function (arr) {
   
   arr.map(function(element){
         if(element == 0 && typeof(element) == number){
             arr.splice(arr.indexOf(element),1);
             arr.push(element);
         };
   });
   return arr;
}
        


console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));