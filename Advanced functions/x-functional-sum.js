function sum(a){
    const innerFunc = function(b){
        a += b
        return innerFunc
    }
    innerFunc.valueOf = function(){
        return a
    }//prezapisva kakvo pravi funkciqta valueOf. Moje sushtoto s toString
    return innerFunc
}


console.log(sum(1)(2)(3))