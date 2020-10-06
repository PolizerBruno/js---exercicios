function getCount(str) {
    var vowelsCount = 0;
    var array = ['a','e','i','o','u'];
    for(var i = 0 ; i <= str.length -1; i++){
       array.forEach(function(item){
           if(str[i] == item){
               vowelsCount++
           }else{

           }
       });
    }
    
    return vowelsCount;
  }

  console.log(getCount("abracadabra"));