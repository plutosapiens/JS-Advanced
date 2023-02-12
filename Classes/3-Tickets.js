function tickets(array, sorting){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }
    
    let tickets = []

    for(let element of array){
        const [currentDestination, currentPrice, currentStatus] = element.split('|')
        //console.log(currentDestination)
        tickets.push(new Ticket(currentDestination, currentPrice, currentStatus))
    }
    
    let sorted
    switch(sorting){
        case 'destination':
            sorted = tickets.sort((a,b) => (a.destination).localeCompare(b.destination))
            break
        case 'price':
            sorted = tickets.sort((a,b) => (a.price) - (b.price))
            break
        case 'status':
            sorted = tickets.sort((a,b) => (a.status).localeCompare(b.status))
            break
    }
// for (let tick of sorted){
//    console.log(tick)

// }
    return sorted
}

console.log(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination');

