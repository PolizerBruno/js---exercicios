function validate(password) {
    if(password.length >=6){
        for(var i =0 ; i < password.length; i++){
            console.log('Caractere : ' + password.charAt(i)  +' -> ' + String(password.charAt(i).charCodeAt()))
            if(password.charAt(i) == password.charAt(i).toUpperCase() && password.charAt(i).charCodeAt() > 57){
                var toUpperCase = true;
            }else if(password.charAt(i) == password.charAt(i).toLowerCase() && password.charAt(i).charCodeAt() > 57){
                var toLowerCase = true;
            }else if(57 >= password.charAt(i).charCodeAt() && password.charAt(i).charCodeAt() >= 49){
                var containsNumber = true;
            }else{
                return false
            }
        }
        if(toUpperCase && toLowerCase && containsNumber){
            return true
        }else{
            return false
        }
       
    }else{
        return false;
    }
  
  }

  console.log(validate('fjd3IR9.'));