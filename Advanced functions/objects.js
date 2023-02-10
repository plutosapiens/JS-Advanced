let family = {
    dad:{
        hair: 'blue',
        eyes: 'green'
    }
}
let son = 'son'
family[son] = Object.create(family[dad])


console.log(family.dad)

//console.log(data)
//    const instr = {
//        create: (n, inherits, n2) =>
//            (data[n] = inherits ? Object.create(data[n2]) : {}),