
let bestWorkers = [
    ['Stanimir', 2000, 'engineer'], ['Pesho', 1500, 'electrical engineer'], ['Slavi', 500, 'dyer'],['Stan', 2000, 'architect']    
]
let sortedWorkers = bestWorkers.sort((a,b) => (b[1] - a[1]) || (a[2].localeCompare(b[2])))

for(let worker of sortedWorkers){
    console.log(worker[2])
}