function juiceFlavours(array){
    const juices = {}
    const bottleArangement = []
    const bottles = {}
    for(let element of array){
        let [juice, currentQuantity] = element.split(' => ')

        if(juices[juice]){
            juices[juice].quantity += Number(currentQuantity)
        }
        else{
            juices[juice] = {
                juice: juice,
                quantity: Number(currentQuantity),
            }
        }
        if(juices[juice].quantity >= 1000 && !bottleArangement.includes(juice)){
            bottleArangement.push(juice)
        }
    }

    for(let bottle of bottleArangement){
        let bottleCount = 0
        while(juices[bottle].quantity >= 1000){
            bottleCount ++
            juices[bottle].quantity -= 1000
        }
        bottles[bottle] = bottleCount
    }
    for(let bottle in bottles){
        console.log(`${bottle} => ${bottles[bottle]}`)
    }
}

juiceFlavours(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

)