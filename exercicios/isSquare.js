var isSquare = function(n){
    if(Math.sqrt(n).toString().lastIndexOf('.') === -1 && n.valueOf() >= 0){
        return true;

    }else{    
        return false;
    }
}

 console.log(isSquare(0));
