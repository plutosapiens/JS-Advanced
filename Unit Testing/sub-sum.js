function subSum(array, firstIndex, lastIndex){
    if(!Array.isArray(array)){
        return NaN
    }
    else{
        if(firstIndex < 0){
            firstIndex = 0
        }
        if(lastIndex > array.length - 1){
            lastIndex = array.length - 1

        }
        let sum = 0
        for(let i=firstIndex; i<= lastIndex; i++){
            sum += Number(array[i])
        }
        return sum
    }
}
