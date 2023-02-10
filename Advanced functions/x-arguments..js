function arguments(...params){
    const types = {}
        for(element of params){
        const currentType = typeof element
        console.log(`${currentType}: ${element}`)
        if(types[currentType] == undefined){
            types[currentType] = 0
        }
        types[[currentType]] ++
    }

    let result = Object.entries(types).sort((a,b) => b[1] - a[1])

    for(let [type, count] of result){
        console.log(`${type} = ${count}`)
    }
}

arguments(1, 2, 'b', 3, 'a')