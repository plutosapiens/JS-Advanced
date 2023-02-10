// apple - 1 carbohydrate, 2 flavour
//lemonade - 10 carbohydrate, 20 flavour
//burger - 5 carbohydrate, 7 fat, 3 flavour
//eggs -  5 protein, 1 fat, 1 flavour
//turkey -  10 protein, 10 carbohydrate, 10 fat, 10 flavou

function solve(){

    const recepies = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour:1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
    }
    const stock ={
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    const commands = {
        restock,
        prepare,
        report,
    }

    return manager

    function manager(line){
        let  [command, parameter, quantity] = line.split(' ')
        quantity = Number(quantity)
        return commands[command](parameter, quantity)
    }

    function restock(type, quantity){
        stock[type] += quantity
        return 'Success'
    }

    function prepare(recepie, quantity){
        for(let el in recepies[recepie]){
            if(recepies[recepie][el] * quantity > stock[el]){
                return `Error: not enough ${el} in stock`
            }
        }
        for(let el in recepies[recepie]){
            stock[el] -= recepies[recepie][el] * quantity
        }
        return 'Success'
    }

    function report(){
        let result = []
        for(let key in stock){
            result.push(`${key}=${stock[key]}`)
        }
        return result.join(' ')
}
}

let manager = solve()
console.log(manager('restock flavour 50')) //Success
console.log(manager('restock carbohydrate 50')) //Success
console.log (manager ("prepare lemonade 1 ")); // Error: not enough carbohydrate in stock
console.log(manager('report')) //Success

