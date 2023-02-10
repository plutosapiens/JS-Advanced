function sort(array, condition){
    const methods = {
        asc: (a,b) => a - b,
        desc: (a,b) => b - a,
    }

    array.sort(methods[condition])

    return array
}


console.log(sort([1,5,3,4,2,7,6], 'asc'))