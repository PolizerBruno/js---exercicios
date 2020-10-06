function longest(s1, s2) {
    var string = "";
    alfabs= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    alfabs.forEach(function(letra){
        if(String(s1).search(letra) >= 0 || String(s2).search(letra) >= 0){
            string = String(string).concat(letra);
        }
    });
    return string;
}


console.log(longest("aretheyhere", "yestheyarehere"));