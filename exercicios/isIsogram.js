function isIsogram(str){
    var stx = str.valueOf().toUpperCase();
    for(var i = 0; i <= stx.length -1; i++){
      for(var b = 0 ; b <= stx.length -1; b++){
        if(i == b){

        }else{
            if(stx[i].valueOf() != stx[b].valueOf()){ 

            }else{
                return false;
            }
        }
      }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moOse"));

