class WineSelection{
    constructor(space){
        this.space = Number(space)
        this.wines = []
        this.bill = 0
    }
    reserveABottle(wineName, wineType, price){
        if(this.space<=0){
            throw new Error ('Not enough space in the cellar.')
        }
        else{
            this.space --
            this.wines.push({
                wineName: wineName,
                wineType: wineType,
                winePrice: price,
                paid: false
            })
            return `You reserved a bottle of ${wineName} ${wineType} wine.`
        }
    }
    payWineBottle(wineName, price){
        const wine = this.wines.find((wineObject) => wineObject.wineName === wineName)
        if(wine == undefined){
        throw new Error(`${wineName} is not in the cellar.`)
        }
        else if(wine.paid == true){
            throw new Error(`${wineName} has already been paid.`)
        }
        else{
            wine.paid = true
            this.bill += price
            return `You bought a ${wineName} for a ${price}$.`
        }
    }
    openBottle(wineName){
        const wine = this.wines.find((wineObject) => wineObject.wineName === wineName)
        if(wine == undefined){
        throw new Error(`The wine, you're looking for, is not found.`)
        }
        else if(wine.paid == false){
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }
        else{
            //if we have to remove it fro m the cellar after we've opened it:
            this.wines.splice(this.wines.indexOf(wine), 1)
            this.space++
            return `You drank a bottle of ${wineName}.`
        }
    }
    cellarRevision(wineType){
        let result = []
        if(wineType == undefined){
            result.push(`You have space for ${this.space} bottles more.`)
            result.push(`You paid ${this.bill}$ for the wine.`)
            const orderedWines = this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName))
            for(let entry of orderedWines){
                let isPaid = ''
                if(entry.paid){
                    isPaid = 'Has Paid'
                }
                else{
                    isPaid = 'Not Paid'
                }
                result.push(`${entry.wineName} > ${entry.wineType} - ${isPaid}.`)
            }
            result = result.join('\n')
        }
        else{
            const wine = this.wines.find((wineObject) => wineObject.wineType === wineType)
            if(wine == undefined){
            throw new Error(`There is no ${wineType} in the cellar.`)
            }
            else{
                let isPaid = ''
                if(wine.paid){
                    isPaid = 'Has Paid'
                }
                else{
                    isPaid = 'Not Paid'
                }
                result = `${wine.wineName} > ${wine.wineType} - ${isPaid}.`
            }
        }
        return result
    }
}

//Testing

let selection = new WineSelection(2)

selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50)
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120)
selection.payWineBottle('Sauvignon Blanc Marlborough', 50)

console.log((selection.openBottle('Sauvignon Blanc Marlborough')))//, "You drank a bottle of Sauvignon Blanc Marlborough.")
console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'))//.to.throw("Cabernet Sauvignon Napa Valley need to be paid before open the bottle.")
